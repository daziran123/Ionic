import { Component, Input} from '@angular/core';
import { BaseUI } from '../../pages/common/baseui';
import { RestProvider } from '../../providers/rest/rest';
import { DetailsPage } from '../../pages/details/details';
import { Storage } from '@ionic/storage';

import {  
   NavController,
   NavParams,
   ModalController,
   ToastController,
   LoadingController,
   ViewController
   } from 'ionic-angular';
@Component({
  selector: 'question-list',
  templateUrl: 'question-list.html'
})
export class QuestionListComponent extends BaseUI {

  text: string;
  question:string[];
  // datatype外部传递进来的，dataSourceType,本地接受之后的参数命名
@Input ('datatype') dataSourceType;
  errorMessage: any;
  questions: string[];
  constructor(
    public navCtrl:NavController,
    public viewCtrl:ViewController,
    public navParams:NavParams,
    public modalCtrl:ModalController,
    public rest:RestProvider,
    public toast:ToastController,
    public storage:Storage,
    public loadingCtrl:LoadingController,

  ) {
 super();
  }

  // 如何向组件传递参数@Input( 'datatype') dataSourceType;
  ngAfterContentInit(): void {
     this.storage.get('UserId').then((val) => {
           if(val !=null){
             //加载用户数据
             var loading=super.showLoading(this.loadingCtrl,"加载中。。。");
             this.rest.getUserQuestionList(val,this.dataSourceType)
             .subscribe(
               q =>{
                 this.questions = q;
               loading.dismissAll();
               },
               error=>this.errorMessage=<any>error);
           }
 })
  }

  gotoDetails(questionId){
    this.navCtrl.push(DetailsPage,{id:questionId});
  }
}
