import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the EmojiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EmojiProvider {

  constructor(public http: HttpClient) {
    //console.log('Hello EmojiProvider Provider');
  
  }
  /**
   *获取所有表情的数据（已分好了组）
   *
   * @memberof EmojiProvider
   */
  getEmojis(){

  // 定义emojis 表情包
   const EMOJIS=
   "😄 🙂 😂 😕 😕 😁 😅 😓 😃 😵 😆 😄 🙂 😂 😕 😕 😁 😅 😓 😃 😵 😆"
   "😄 🙂 😂 😕 😕 😁 😅 😓 😃 😵 😆 😄 🙂 😂 😕 😕 😁 😅 😓 😃 😵 😆"
   "😄 🙂 😂 😕 😕 😁 😅 😓 😃 😵 😆 😄 🙂 😂 😕 😕 😁 😅 😓 😃 😵 😆"
   "😄 🙂 😂 😕 😕 😁 😅 😓 😃 😵 😆 😄 🙂 😂 😕 😕 😁 😅 😓 😃 😵 😆"
   "😄 🙂 😂 😕 😕 😁 😅 😓 😃 😵 😆 😄 🙂 😂 😕 😕 😁 😅 😓 😃 😵 😆"
   "😄 🙂 😂 😕 😕 😁 😅 😓 😃 😵 😆 😄 🙂 😂 😕 😕 😁 😅 😓 😃 😵 😆"
   "😄 🙂 😂 😕 😕 😁 😅 😓 😃 😵 😆 😄 🙂 😂 😕 😕 😁 😅 😓 😃 😵 😆"
   "😄 🙂 😂 😕 😕 😁 😅 😓 😃 😵 😆 😄 🙂 😂 😕 😕 😁 😅 😓 😃 😵 😆";
   
 
   //然后进行分组的操作
   let array=EMOJIS.split(' ');//用空格分组
   let groupNumber=Math.ceil(array.length/10);//  四舍五入的意思 ，但是取大，比如12.1 要取13
  let items=[];
  //分组填充表情
  for(let i=0; i<groupNumber;i++){
    items.push(array.slice(10*i,10*(i+1)))
  }
   return items;
  }

}
