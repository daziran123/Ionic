import { Component } from '@angular/core';
import { NavController, NavParams ,ViewController,LoadingController,ToastController} from 'ionic-angular';
import { BaseUI } from '../common/baseui';
import { RestProvider } from '../../providers/rest/rest';
import { Storage } from '@ionic/storage';
import { RegisterPage } from '../register/register'

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()  import IonicPage,
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
// export class LoginPage { etends BaseUi 是一个扩展类是一个他的父类
  export class LoginPage extends BaseUI{
// 定义好电话和密码
  mobile:any;  //属性
  password:any;
  errorMessage:any; //做一下定义
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl:ViewController, //控制视图的显隐,
    public loadingCtrl:LoadingController,
   //  做一下构造REST构造
    public rest:RestProvider,
    public toastCtrl:ToastController,
    public storage:Storage,
  ) {
    super();//显示调用父类 的构造函数BaseUI
  }


  ionViewDidLoad(){
      console.log('ionViewDidLoad LoginPage');
     }

login(){

      //  需要请求api
      // 加载时有个loading: 因为多处可以用所以搞个封装；公用一个类实现
      var loading = super.showLoading(this.loadingCtrl,"登陆中...");
      // 接着进行rest请求,去rest 定义方法
      this.rest.login(this.mobile,this.password)
      .subscribe(
        f => {
          if(f["Status"]=="OK"){   //返回json 状态
            //如果处理成功，进入登陆成功的页面跳转
  //  storage 存储用户登陆的信息，你也可以储存接口返回的token
  // 每次验证用户是否是真实的用户，是否存在欺骗,攻击性的代码
            this.storage.set('UserId',f["UserId"]);   //x先存储userID 
             loading.dismiss(); //储存好代码后加载中的界面dismiss 掉
             //弹出的login 页面也要dismiss 掉
             this.dismiss();

          }
          else{
            // 如果没有登陆成功，则进去一个弹窗界面
            // 把这个登陆界面隐藏掉
            loading.dismiss();
            // this.dismiss();
            //如果登陆失败后显示的是从后端获取的状态
            super.showToast(this.toastCtrl,f["StatusContent"]);
            // 登陆失败，第一个参数传第一个类的ctrl，第二个类是失败的原因内容
          }
        },
        error=>this.errorMessage=<any>error);
}
/**
 *关闭当前页面方法
 *
 * @memberof LoginPage
 */
dismiss(){
    this.viewCtrl.dismiss()
    
  }

 pushRegisterPage(){
    this.navCtrl.push(RegisterPage);
  }

}




