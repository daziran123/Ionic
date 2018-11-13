import { Http,Response } from '@angular/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  constructor(public http: Http) {
   // console.log('Hello RestProvider Provider');

  }
//feed
private apiUrlFeeds='https://imoocqa.gugujiankong.com/api/feeds/get';
//account
private apiUrlRegister='https://imoocqa.gugujiankong.com/api/account/register';
private apiUrlLogin='https://imoocqa.gugujiankong.com/api/account/login';
private apiUrlUserInfo='https://imoocqa.gugujiankong.com/api/account/userinfo';
private apiUrlUpdateNickName='https://imoocqa.gugujiankong.com/api/account/updatenickname';

//question

private apiUrlQuestionSave='https://imoocqa.gugujiankong.com/api/question/save';

private apiUrlQuestionList='https://imoocqa.gugujiankong.com/api/question/list?index=1&number=10;';
private apiUrlGetQuestion='https://imoocqa.gugujiankong.com/api/question/get';
private apiUrlAnswer='https://imoocqa.gugujiankong.com/api/question/answer';
private apiUrlGetQuestionWithUser='https://imoocqa.gugujiankong.com/api/question/getwithuser';
private apiUrlSaveFavourite='https://imoocqa.gugujiankong.com/api/question/savefavourite';
/**
 *根据用户的手机号码和密码进行登陆
 * 注意安全性方面要有详细的设计和处理，
 * //密码的传递应该在传递参数之前经行加密，
 * 并且服务端也要做相应的处理
 * @param {*} mobile
 * @param {*} password
 * @returns {Observable<string[]>}
 * @memberof RestProvider
 */

  
 
 
 
 login(mobile,password):Observable<string[]>{
  return this.getUrlReturn(this.apiUrlLogin+"?mobile="+mobile+"&password="+password);
}
// login 方法会返回observable 的 一个对象，就会调用 this.getUrlReturn的方法
// 然后做一些 url 的拼接，两个参数是前边传递进来的



   register(mobile,nickname,password):Observable<string[]>{
      return this.getUrlReturn(this.apiUrlRegister+"?mobile="+mobile+"&nickname="+nickname+"&password="+password)
    }

    getUserInfo(userId):Observable<string[]>{
      return this.getUrlReturn(this.apiUrlUserInfo+"?userId="+userId)
    }
 updateNickName(userId,nickname):Observable<string[]>{
   return this.getUrlReturn(this.apiUrlUpdateNickName+"?userid="+userId+"&nickname"+nickname);
 }
saveQuestion(userId,title,content):Observable<string[]>{
  return this.getUrlReturn(this.apiUrlQuestionSave+"?userid="+userId+"&title="+title+"&content="+content);
}
saveFavourite(questionId,userId):Observable<string[]>{
return this.getUrlReturn(this.apiUrlSaveFavourite+"?questionid="+questionId+"&userid="+userId)
}

/**
 *获取问题详情
 *
 * @param {*} id
 * @returns {Observable<string[]>}
 * @memberof RestProvider
 */
getQuestion(id):Observable<string[]>{
return this.getUrlReturn(this.apiUrlGetQuestion+"?id="+id);
}
/**
 *获取问题的详情，传递userid 获取到当前用户有没有关注此问题
 *
 * @param {*} questionId
 * @param {*} userId
 * @returns {Observable<string[]>}
 * @memberof RestProvider
 */
getQuestionWithUser(questionId,userId):Observable<string[]>{
return this.getUrlReturn(this.apiUrlGetQuestionWithUser+"?id="+questionId+"&userid="+userId);
}
//feeds  被关注了，被回答了，会通知你 
  getFeeds():Observable<string[]>{
     return this.getUrlReturn(this.apiUrlFeeds);
  }


  getQuestions():Observable<string[]>{
    return this.getUrlReturn(this.apiUrlQuestionList);
 }

/**
 *h回到问题接口
 *
 * @param {*} userId
 * @param {*} questionId
 * @param {*} content
 * @returns {Observable<string[]>}
 * @memberof RestProvider
 */
answer(userId,questionId,content):Observable<string[]>{
    return this.getUrlReturn(this.apiUrlAnswer+"?userid"+userId+"&questionid="+questionId+"&content="+content);

  }
b
/*
/*   全局获取HTTP 请求方法
工号：大力 
*  @private 
*  @param{string}url
 @return {observable<string>[]}
   @memberof RestProvider
*/
private getUrlReturn(url:string):Observable<string[]>{
return this.http.get(url)
          .map(this.extractData)
          .catch(this.handleError);
}

/**
 *处理接口返回的数据，处理成JSON 格式
 *
 * @private
 * @param {Response} res
 * @returns
 * @memberof RestProvider
 */
private extractData(res:Response){
  let body=res.json();
  return JSON.parse(body)||{};
}
/**
 *处理请求中的错误，考虑了各种情况的错误处理并在console 中显示erro
 *
 * @private
 * @param {(Response| any)} error
 * @returns
 * @memberof RestProvider
 */
private handleError(error: Response| any){
  let errMsg:string;
  if(error instanceof Response){
    const body=error.json()||'';
    const err=body.error|| JSON.stringify(body);
    errMsg=`${error.status}-${error.statusText||''}${err}`;
  }else{
    errMsg=error.message ? error.message :error.toString();
  }
  console.error(errMsg);
  return Observable.throw(errMsg);
}
}
