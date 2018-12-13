import { Component } from '@angular/core';
import {  NavController, NavParams,ViewController,LoadingController,
  ToastController} from 'ionic-angular';
import { BaseUI } from '../common/baseui';
import {Storage } from '@ionic/storage';
import { RestProvider } from '../../providers/rest/rest';
/**
 * Generated class for the AnswerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-answer',
  templateUrl: 'answer.html',
})
export class AnswerPage extends BaseUI {
   id:string;
   errorMessage:any;
   content:string;

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public viewCtrl:ViewController,
     public storage:Storage,
     public loadingCtrl:LoadingController,
     public rest:RestProvider,
     public toastCtrl:ToastController,
    
    ) {
super();
this.id=navParams.get('id');//接受传递过来的参数
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnswerPage');
  }
// dismiss(){
//   this.viewCtrl.dismiss();
// }
submit(){
    this.storage.get('UserId').then((val)=>{
      if(val!=null){
        var loading=super.showLoading(this.loadingCtrl,'发表中...')
        this.rest.answer(val,this.id,this.content)
        .subscribe(f=>{
                if(f["Status"]=="OK"){
                loading.dismissAll();
                // this.dismiss();
                
                }else{
                // loading.dismissAll();
                super.showToast(this.toastCtrl,f["StatusContent"]);
                }
        },error=>this.errorMessage=<any>error);
      }
      else{
        super.showToast(this.toastCtrl,"请登陆回答")
      }
    })
  }
}
