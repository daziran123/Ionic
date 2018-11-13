import { Component } from '@angular/core';
import { 
  IonicPage, 
  NavController,
  NavParams,
  ToastController,
  LoadingController,
  ModalController,
} from 'ionic-angular';
import { BaseUI } from '../common/baseui';
import { RestProvider } from '../../providers/rest/rest';
import {Storage} from '@ionic/storage';
import {AnswerPage} from '../answer/answer';
 
/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage extends BaseUI {

id:string;
question:string[];
answers:string[];
errorMessage:any;
userId:string;
isFavourite:boolean;
isMyQuestion:boolean;
// 是否是我的问题
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public rest:RestProvider,
    public toastCtrl:ToastController,
    public loadingCtrl:LoadingController,
    public storage:Storage,
    public modalCtrl:ModalController,
  ) {
    super();
  }

  ionViewDidLoad() {
    // 刚才push 传递了参数 id,那么此时接受参数id 
  // 既是参数的获取，获取参说的传递
   this.id=this.navParams.get('id');
    this.loadQuestion(this.id);

  }
  loadQuestion(id){//加载问题详情

    this.storage.get('UserId').then((val)=>{
      if(val!==null){
        this.userId=val;
        var loading=super.showLoading(this.loadingCtrl,"加载中...");
        this.rest.getQuestionWithUser(id,val)//调用方法，记得定义（此方法在rest中定义）
        .subscribe(  //传递对应的参数
          q=>{this.question=q;
            this.answers=q["Answers"]; //q 里有个answers 数组里有个数组，
            //可以展示多个回答，也可能后台id 未查到，为空
            loading.dismiss();
            this.isFavourite=q["IsFavourite"];
            this.isMyQuestion = (q["OwnUserId"]==val);
          },
          error=>this.errorMessage=<any>error);
          //然后可以进行数据的绑定
      }
    });
   
  }
  saveFavourite(){
    var loading=super.showLoading(this.loadingCtrl,"请求中...");
    this.rest.saveFavourite(this.id,this.userId)
    .subscribe(f=>{
      if(f["Status"]=="OK"){
        loading.dismiss();
        super.showToast(this.toastCtrl,this.isFavourite?"取消关注成功":"关注问题成功");
        // 如过已经关注，变成取消关注，否则关注
       this.isFavourite=!this.isFavourite
      }
    },error=>this.errorMessage=<any>error)
   }

   showAnswerPage(){
      let modal=this.modalCtrl.create(AnswerPage,{"id":this.id});// modal传参
      //关闭后的回调
      modal.onDidDismiss(()=>{
        this.loadQuestion(this.id);//这样回调后，回答完毕后，父页面同时进行了刷新
      });
      modal.present();
   }
   //
}
