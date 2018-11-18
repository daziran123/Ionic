
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Events} from 'ionic-angular';
// import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

//聊天信息的属性
export class ChatMessage{
  messageId:string;
  userId:string;
  username:string;
  userImgUrl:string;
  toUserId:string;
  time:number|string;
  message:string;
  status:string;
}
//用户信息属性
export class UserInfo{
  userId:string;
  userName:string;
  userImageUrl:string;
}
@Injectable()
export class ChatserviceProvider {

  constructor(public http: Http,public event:Events) {
   
  }
  
/**
 *获取消息列表
 *从Api 获取或者从模拟的JSON获取
 * @returns {Promise<ChatMessage[]>}
 * @memberof ChatserviceProvider
 */
getMessageList():Promise<ChatMessage[]>{
  const url='../../assets/mock/msg-list.json';

  return this.http.get(url)//从json里边获得url
  .toPromise()//
  .then(response=>response.json().array as ChatMessage[]) // json 强制转换成数组，chatMessage[]
  .catch(error=>Promise.reject(error|| '错误信息'));//异常捕获返回告诉调用的地方，异常信息
}
sendMessage(message:ChatMessage){
      return new Promise(resolve=> setTimeout(()=>{
        resolve(message)
      },Math.random()*1000))
      .then(()=>{
        // 发出去之后模拟发送消息
       this.mockNewMessage(message);
      });

      }
    /**
     *模拟对方回复了一个消息
     这里要思考：前台如何即时地接受这个消息
     *
     * @param {*} message
     * @memberof ChatserviceProvider
     */
    mockNewMessage(message:any){
      const id=Date.now().toString();
      let messageSend:ChatMessage={
        messageId:id,
        userId:'123321',
        username:'魔女',
        userImgUrl:'http://img.mukewang.com/user/57a322f00001e4ae02560256-40-40.jpg',
        toUserId:message.userId,
        time:Date.now(),
        message:'你是不是给我发送了['+message.message+']?',
        status:'success'
      }
      //进行消息的发布，类似大喇叭经行广播
      setTimeout(()=>{
        this.event.publish('chat.received',messageSend,Date.now())
      },Math.random()*1000)
}

}
 