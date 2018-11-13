import { Component } from '@angular/core';
import { NavController, NavParams ,ModalController,LoadingController} from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { BaseUI } from '../common/baseui';
import { DetailsPage } from '../details/details';

/**
 * Generated class for the DiscoveryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-discovery',
  templateUrl: 'discovery.html',
})
export class DiscoveryPage  extends BaseUI{
  
// 加载所有的questions
questions:string[];
errorMessage:any;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl:ModalController,
    public loadingCtrl:LoadingController,
    public rest:RestProvider
  
  ) {
super();
  }

  ionViewDidLoad() {
   this.getQuestions();
  }

  getQuestions(){
    var loading=super.showLoading(this.loadingCtrl,"数据加载中");
    this.rest.getQuestions()
    .subscribe(
      q=>{
        this.questions=q;
        loading.dismiss();
      },
      error=>this.errorMessage=<any>error);
}

doRefresh(refresher){
this.getQuestions(); //页面刷新的时候重新做一下问题加载
refresher.comple();// 整个刷新完成关闭
}

gotoDetails(questionId){
  this.navCtrl.push(DetailsPage,{id:questionId});
    }
}
