
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
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

  constructor(public http: Http) {
   
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
}
 