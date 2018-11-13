import { Component } from '@angular/core';
import {  NavController, NavParams,ViewController,LoadingController,ToastController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import {Storage} from '@ionic/storage';
import { BaseUI } from '../common/baseui';

// IonicPage,
/**
 * Generated class for the QuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage extends BaseUI {

title:string;
content:string;
errorMessage:any;

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public viewCtrl:ViewController,
    public rest:RestProvider,
    public storage:Storage,
    public loadingCtrl:LoadingController,
    public toastCtrl:ToastController,
    
    ) {
      super();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionPage');
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

  submitQuestion(){
    // 先获取userid  需要做一些构造
 
    this.storage.get('UserId').then((val)=>{
          if(val!=null){
        var loading=super.showLoading(this.loadingCtrl,"发表中...");
        this.rest.saveQuestion(val,this.title,this.content)
        .subscribe(f=>{
          if(f["Status"]=="OK"){
                    loading.dismissAll();
                    this.dismiss();
          }else{
            loading.dismissAll();
            super.showToast(this.toastCtrl,f["StatusContent"]);
          }
          
        },error=>this.errorMessage=<any>error);
      }
      else{
        super.showToast(this.toastCtrl,"请登录后发布提问");
      }
      
    });
  }

// 到聊天的窗口
gotoChat(){
  
}
}