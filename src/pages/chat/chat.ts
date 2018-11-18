import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { ChatdetailsPage } from '../chatdetails/chatdetails';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
// 定义一个对象
userinfo:Object;  
ChatdetailsPage:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
    //在此处可以直接从你的api 接口或者其他方法实现用户列表的定义。
    this.userinfo={
      userid:'123321',
      username:'魔女'
    }  
                                                                                                    
    this.ChatdetailsPage=ChatdetailsPage;
  //  this.ChatdetailsPage是 ChatdetailsPage:any; 定义，等于的是导入的
  //   import { ChatdetailsPage } from '../chatdetails/chatdetails';

  }
    
  

}
