import { Component } from '@angular/core';
import {  NavController, NavParams,Content ,TextInput,Events} from 'ionic-angular';
import {Storage} from '@Ionic/storage';
import { ChatserviceProvider, ChatMessage} from '../../providers/chatservice/chatservice'
import { RestProvider } from '../../providers/rest/rest';
import {ViewChild} from '@angular/core'
// @IonicPage()
@Component({
  selector: 'page-chatdetails',
  templateUrl: 'chatdetails.html',
})
export class ChatdetailsPage{
 

  chatUserName:string;
  isOpenEmojiPicker = false;
  chatUserId:string; //意思是和谁聊天
  userName:string;
  userId:string;
  userImgUrl:string;
  messageList:ChatMessage[]=[]; // =[] 意思是初始的是空 
  errorMessage:any;
  editorMessage:string;
  @ViewChild(Content) content:Content;
  @ViewChild('chatInput') messageInput:TextInput;
  // 定义
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public rest:RestProvider,
    public storage:Storage,
    public event:Events,
    public chatservice:ChatserviceProvider){
 
    this.chatUserName=navParams.get('username');
    // 获取 userinfo中 username 界面传递过来的值,每一步开发要检查以下
    this.chatUserId=navParams.get('userid');//取得和谁聊天的userid
  }


  // 应该页面进来的时候,继续往下滚动到底部

   ionViewDidEnter(){
    //我自己用户信息的获取
this.storage.get('UserId').then((val)=>{
  if(val!=null){
    this.rest.getUserInfo(val)
    .subscribe(
      userinfo=>{
        this.userId='140000198202211138';
        this.userName=userinfo["UserNickName"];
        this.userImgUrl=userinfo["UserHeadface"]+"?"+(new Date()).valueOf();
      },
      error=>this.errorMessage=<any>error);
  }
});

     this.getMessages()
     .then(()=>{
       this.scrollToBottom();
     });

      //听取消息的发布
      this.event.subscribe('chat.received',(msg,time)=>{
        this.messageList.push(msg);
        this.scrollToBottom()
      })
   }

  

// 定义一个 getMessages 方法 调用刚才chatservice定义的方法
// 注意import 和 在 constructor()
//
/**
 *调用service里面的方法进行属性的赋值
 *
 * @returns
 * @memberof ChatdetailsPage
 */
getMessages(){
return this.chatservice.getMessageList()
.then(res=>{
  this.messageList=res;//给messageList 赋值  赋值为返货的值 
})
.catch(error=>{
  console.error(error);
})
  }
// 切换表情组件
  switchEmojiPicker(){
    this.isOpenEmojiPicker=!this.isOpenEmojiPicker
  }

  scrollToBottom():any{
    // 滚动实现方法，一会来实现
    setTimeout(()=>{
      if(this.content.scrollToBottom){
        this.content.scrollToBottom();
      }
    },400)
  }

  getMessageIndex(id:string) {
   return this.messageList.findIndex(e=>e.messageId===id);
  }
//  发送信息逻辑
 sendMessage(){
if(!this.editorMessage.trim())
return;

const id=Date.now().toString();
let messageSend:ChatMessage={
  messageId:id,
  userId:this.userId,
  username:this.userName,
  userImgUrl:this.userImgUrl,
  toUserId:this.chatUserId,
  time:Date.now(),
  message:this.editorMessage,
  status:'pending'
}

this.messageList.push(messageSend);
this.scrollToBottom();
this.editorMessage='';
if(!this.isOpenEmojiPicker){
  this.messageInput.setFocus();
}
this.chatservice.sendMessage(messageSend)
.then(()=>{
  let index=this.getMessageIndex(id);
  if(index!==-1){
    this.messageList[index].status='success';
  }
});
}
ionViewWillLeave(){
  // 告诉我要走了 不听了
  this.event.unsubscribe('chat.received');
}

  focus(){
    this.isOpenEmojiPicker=false;
    this.content.resize();
    this.scrollToBottom();
  }
 
}
