import { Component } from '@angular/core';
import { 
  NavController ,
  ModalController,
  Tabs,
  LoadingController
} from 'ionic-angular';
import { QuestionPage } from '../question/question';
import { BaseUI} from '../common/baseui';
import { RestProvider } from '../../providers/rest/rest';
import { DetailsPage } from '../details/details';
// import{ ChatPage} from '../chat/chat';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage extends BaseUI {
//  内部对象定义,丢到前台循环渲染
 feeds:string[];
 errorMessage:any;
  constructor(
    public navCtrl: NavController,
    public modalCtrl:ModalController,
    public loadingCtrl:LoadingController,
    public rest:RestProvider,
  
  ) {
      super();
  }
  

  ionViewDidLoad(){
    this.getFeeds();
  }



  gotoQuestion(){
  var modal=this.modalCtrl.create(QuestionPage);
  modal.present();
  }


/**
 *选择指定的tabs
 *
 * @memberof HomePage
 */
gotoChat(){
  //   var modal=this.modalCtrl.create(ChatPage);
  // modal.present();
      this.selectTab(2);
  }
  // 选择也页面的有几种方式
// 选择哪一个tab
  selectTab(index:number){
  var t:Tabs=this.navCtrl.parent;//定义一个参数 t 类型是 tabs，定义在ionic-angualr
  //navCtrl 控制额是，首页 内容视图的东西。他的 parent父级，就是  tabs层级
  t.select(index);

  }

  getFeeds(){
         var loading=super.showLoading(this.loadingCtrl,"数据加载中");
         this.rest.getFeeds()
         .subscribe(
           f=>{
             this.feeds=f;
             loading.dismiss();
           },
           error=>this.errorMessage=<any>error);
  }
  gotoDetails(questionId){
this.navCtrl.push(DetailsPage,{id:questionId});
  }
}
