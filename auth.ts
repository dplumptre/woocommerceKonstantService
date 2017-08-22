import { Http, Headers, Response} from '@angular/http';
import { KonstService} from './konst';
import { Injectable} from '@angular/core';
import { AlertController ,ToastController } from 'ionic-angular';
import 'rxjs/Rx';


@Injectable()
// USE @INJECTIBLE HERE
// SO THAT WE CAN USE constructor
// Headers cant be injected so u do new headers like below

export class AuthService{


constructor(private konst : KonstService ,
  private http: Http,
  private alertCtrl : AlertController,
  private toastCtrl: ToastController
) {}


private store: string;

/* 

signup(fname:string,lname:string,phone:string,email:string){
    let headers = new Headers();
    var regurl = this.konst.siteurl+"register";
    var credz = "lname="+ lname+ "&fname="+ fname + "&email="+ email + "&phone="+ phone ;
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    //return this.http.post(regurl,credz ,{headers: headers});
    return this.http.post(regurl,credz ,{headers: headers})
    .map(res => res.json())
    .toPromise();
          //need to use this map this way to get response at the other side
}


 */


signin(username:string, password:string){
  var headers = new Headers();
  var loginurl = this.konst.siteurl+"api/auth/generate_auth_cookie/?insecure=cool";
  var credz = "&username="+   username + "&password=" + password;
  headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  return this.http.post(loginurl,credz ,{headers: headers})
  .map(res => res.json())
//  .toPromise();
}



/* get_user_details(){
  this.store = localStorage.getItem('auth_key');
  var url = this.konst.siteurl+"get_user_details" + "?token=" +this.store ;
  return   this.http.get(url)
  .map((response:Response) => {
  return response.json();
  });
}




logout(){
  localStorage.removeItem('auth_key');
}



changePassword(userid:number,password:string,password1:string){
 // alert(usercredz.password +"  "+usercredz.password1 + " "+this.userid );
this.store = localStorage.getItem('auth_key');
var headers = new Headers();
var theurl = this.konst.siteurl+"change-password"+ "?token=" + this.store ;
console.log(theurl);

var credz = "password="+ password +  "&userid="+userid +  "&password1=" + password1;
headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
return this.http.post( theurl , credz ,{headers: headers})
.map(res => res.json())
.toPromise();
}


 */




}
