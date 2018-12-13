import { Component } from '@angular/core';
import { 
  IonicPage,
  NavController, 
  NavParams,
  LoadingController,
  ToastController} from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { RestProvider } from '../../providers/rest/rest';
import { BaseUI } from '../common/baseui';
import { DetailsPage } from '../details/details';


// 通知的消息后台保存回答，关注的时候自动生成的消息数据，前台只要通过api获取即可
@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage extends BaseUI {
  errorMessage: any;
  notificationList:string[];
  loading: any;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public rest:RestProvider,
    public storage:Storage,
    public loadingCtrl:LoadingController,
    public toastCtrl:ToastController,
  ) {
    super()
  }

  ionViewDidLoad() {
    this.storage.get('UserId').then((val)=>{
      if(val!=null){
  var loading=super.showLoading(this.loadingCtrl,"加载中...");
  this.rest.getUserNotifications(val)//从后台获取到的uid 
  .subscribe(
  n=>{
    this.notificationList=n;
    
    loading.dismissAll();
  },error=>this.errorMessage=<any>error);
      }
    })
  }

  gotoDetails(questionId){
    this.navCtrl.push(DetailsPage,{id:questionId});
      }
}
