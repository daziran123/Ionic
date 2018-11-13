// abstract 是抽象类 
import {Loading,LoadingController,ToastController,Toast} from 'ionic-angular';
export abstract class BaseUI{
constructor(){}
protected showLoading(loadingCtrl:LoadingController,
    message:string):Loading{
    let loader=loadingCtrl.create({
        content:message, //传递的内容
        dismissOnPageChange:true,   //当页面改变的时候是否自动dismiss 掉这个弹窗
    });
    loader.present();
    return  loader;
}

/**
 *UI层的公用组建
 *
 * @protected
 * @param {ToastController} toastCtrl
 * @param {string} message
 * @returns {Toast}
 * @memberof BaseUI
 */
protected showToast(toastCtrl:ToastController,message:string):Toast{
       let toast=toastCtrl.create({
        //    写几个参数
           message:message,
           duration:3000,//显示3秒中
           position:'bottom',//显示的位置
       });
       toast.present();
       return toast;
   }

}