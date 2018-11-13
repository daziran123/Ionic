import { Component } from '@angular/core';
import {  NavController, NavParams,IonicPage } from 'ionic-angular';
import { ChatserviceProvider, ChatMessage} from '../../providers/chatservice/chatservice'
@IonicPage()
@Component({
  selector: 'page-chatdetails',
  templateUrl: 'chatdetails.html',
})
export class ChatdetailsPage{

  chatUserName:string;
  isOpenEmojiPicker = false;
  messageList:ChatMessage[]=[]; // =[] 意思是初始的是空 
  
  // 定义
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public chatservice:ChatserviceProvider){

    this.chatUserName=navParams.get('username');
    // 获取 userinfo中 username 界面传递过来的值,每一步开发要检查以下
    
  }


  应该页面进来的时候

   ionViewDidEnter(){
     this.getMessages()
     .then(()=>{
       this.scrollToBottom();
     });
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
  }
}
