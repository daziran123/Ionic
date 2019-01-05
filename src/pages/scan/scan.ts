import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { QRScanner,QRScannerStatus} from '@ionic-native/qr-scanner';

@IonicPage()
@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html',
})
export class ScanPage {

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public alertCtrl:AlertController,
     public qrScanner:QRScanner,

     ) {
  }

  ionViewDidEnter() {
   this.scanQRCode();
  }
scanQRCode(){
this.qrScanner.prepare()

.then((status:QRScannerStatus)=>{
if(status.authorized){
  let scanSub=this.qrScanner.scan().subscribe((text:string)=>{
    let alert = this.alertCtrl.create({
title:"二维码内容",
subTitle:text,
buttons:['ok']
    });
    alert.present();
    scanSub.unsubscribe();
  });

this.qrScanner.show();
}
else if(status.denied){
//体型用户权限未开
}else{

}
})
.catch((e:any)=>console.error('Error:',e))
}}
