import { Component } from '@angular/core';
import {  NavController, NavParams,ModalController,LoadingController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';
import { BaseUI } from '../common/baseui';
import { RestProvider } from '../../providers/rest/rest';
import {UserPage} from '../user/user';
import {UserdatalistPage} from '../userdatalist/userdatalist';
import { SettingsProvider } from '../../providers/settings/settings';


@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage extends BaseUI {
    public notLogin:boolean=true;
    public logined:boolean=false;
    headface:string;
    userinfo:string[];
  selectedTheme: string;
    constructor(
     public navCtrl: NavController,
     public navParams: NavParams,
     public modalCtrl:ModalController,
     public storage:Storage,
     public loadingCtrl:LoadingController,
     public rest:RestProvider,
     private settings:SettingsProvider,
    ) {
      super();
      this.settings.getActiveTheme().subscribe(val=>this.selectedTheme=val)
  }
// 学习的本质就是重复
  // ionViewDidLoad() { 这个是生命周期，暂时用不到先注释掉
  //   console.log('ionViewDidLoad MorePage');
  // }
showModal(){
// 新建一个login
const modal = this.modalCtrl.create(LoginPage);
modal.present();
}
// ionViewDidEnter(){  每次 enter 的时候加载一次 改成 只加载第一次 load
ionViewDidLoad(){ 
  this.loadUserPage();
}


 loadUserPage(){

  this.storage.get('UserId').then((val)=>{
    if(val!=null){
    // 用户登陆过
     var loading=super.showLoading(this.loadingCtrl,"加载中...");
     this.rest.getUserInfo(val)
     .subscribe(
       userinfo=>{
         this.userinfo=userinfo;
         this.headface=userinfo["UserHeadface"]+"?"+(new Date()).valueOf();
         this.notLogin=false;
         this.logined=true;
         loading.dismiss();
       }
     );
    // 加载用户数据
    }
    else{

      this.notLogin=true;
      this.logined=false;
      
    }
  });
}

gotoDataList(type){
  this.navCtrl.push(UserdatalistPage,{"dataType":type})
}
gotoUserPage(){
  this.navCtrl.push(UserPage)
}

toggleChangeTheme(){
if(this.selectedTheme === 'dark-theme')
{ 
  this.settings.setActiveTheme('light-theme');
}
else{
  this.settings.setActiveTheme('dark-theme');
}
}
}
