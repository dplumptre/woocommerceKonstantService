# woocommerceKonstantService
(ionic 2 &amp; 3 )this is a contant file in your Services folder  that will make life easy for you


Remember to add it to ypur app.modeule,ts file


import { KonstService} from '../services/konst';


  providers: [
    StatusBar,
    SplashScreen,
    KonstService,  <----------
    CartService,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
  
  
  
  You can access it in your page like this
  
  import {KonstService} from '../../services/konst';
  
  
  private konst: KonstService    <---added in constructor
  
  
    this.konst.getWC().getAsync('customers/email/'+ this.newUser.email)  --> u can pick it up like this
    
    
    this.konst.toastMsg('Email is already taken','');  ----> can pick up toast messages like this
