import { Component } from '@angular/core';
import {  NavController, NavParams,ViewController,LoadingController,ToastController } from 'ionic-angular';
import { BaseUI } from '../common/baseui';
import { RestProvider} from "../../providers/rest/rest"
// import {Storage} from '@ionic/storage'
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage extends BaseUI {
  mobile:any;
  password:any;
  nickname:any;
 confirmPassword:any;
 errorMessage:any;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public loadingCtrl:LoadingController,
     public viewCtrl:ViewController,
    public rest:RestProvider,
  public toastCtrl:ToastController) {
       super();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  dismiss(){
    this.viewCtrl.dismiss();
  }

  gotoLogin(){
  this.navCtrl.pop();
}

doRegister(){
//前台验证表单数据的正确性
//包括手机号码，验证国内手机号码格式，昵称的长度，密码的长度
//考虑所有的当前手机号码的可能性

if(!(/^1[34578]\d{9}$/.test(this.mobile))){
  super.showToast(this.toastCtrl,'您的手机号码格式不正确');
}else if(this.nickname.length<3 || this.nickname>10){
  super.showToast(this.toastCtrl,'昵称长度应该在3-10之间');
}
else if( 
  this.password<6 || this.password>20){
    super.showToast(this.toastCtrl,'密码长度在6-20之间');
  }else if (
  this.confirmPassword.length<6 || this.confirmPassword.length>20){
    super.showToast(this.toastCtrl,'密码长度在6-20之间')
  }
//密码验证
 


  if(this.password!=this.confirmPassword){
  super.showToast(this.toastCtrl,'两次输入密码不一致')
  }
  else{
    var loading= super.showLoading(this.loadingCtrl,'注册中...');
  this.rest.register(this.mobile,this.nickname,this.password)
.subscribe(
  f=>{
    if(f["Status"]=="ok"){
      loading.dismiss();
      super.showToast(this.toastCtrl,"注册成功")
      this.dismiss();
    }else{
      loading.dismiss();
      super.showToast(this.toastCtrl,f["StatusContent"]);
      this.dismiss();
    }
  },
  error=>this.errorMessage=<any>error);
  }
  
}
}
