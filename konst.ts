import { Http, Headers, Response} from '@angular/http';
import { Injectable} from '@angular/core';
import { AlertController ,ToastController } from 'ionic-angular';
import 'rxjs/Rx';
import * as WC from 'woocommerce-api';

@Injectable()



export class  KonstService {

  sitename : string = "Grace Springs Africa Publichers";

  siteurl  : string ="http://xxxxxxxxxxxxxxxxxxxxx.com/";

//  siteurl  : string ="http://jokesapi.dev/api/";

constructor(
  private http: Http,
  private alertCtrl : AlertController,
  private toastCtrl: ToastController
) {}



getWC(){
  const wc = WC({
  url: this.siteurl,
  consumerKey: "ck_de9c98345b693b37xxxxxxxxxxxxxxxxxxxxxx",
  consumerSecret: "cs_056da7f8bc2cbe5ce6bdxxxxxxxxxxxxxxxxxxxxxx"
  });

  return wc;
}



 numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

popMsg(title: string,errMsg : string){
    const alert = this.alertCtrl.create({
    title: title,
    message: errMsg,
    buttons:['Ok']
    });
    alert.present();
}


toastMsg(msg: string, myclass : string){
    let toast = this.toastCtrl.create({
    message: msg,
    cssClass: myclass,
    position: "top",
    duration: 7000
    });
    toast.present();
}














}
