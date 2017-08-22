import { Http, Headers, Response} from '@angular/http';
import { KonstService} from './konst';
import { Injectable} from '@angular/core';
import { AlertController ,ToastController } from 'ionic-angular';
import 'rxjs/Rx';
import { Storage } from '@ionic/storage';

@Injectable()
// USE @INJECTIBLE HERE
// SO THAT WE CAN USE constructor
// Headers cant be injected so u do new headers like below

export class CartService{


constructor(private konst : KonstService ,
  private http: Http,
  private alertCtrl : AlertController,
  private toastCtrl: ToastController,
  private storage: Storage
) {}



//get product add to cart
  getCart(product){
  this.storage.get('cart')
  .then((data) =>{
    if(data == null || data.length == 0){
    data = [];
    data.push({
    'product':product,
    'qty':1,
    'amount':parseFloat(product.price)
    });
    }else{
    let  added =0;
    for(let i=0; i< data.length; i++){
    if(product.id == data[i].product.id){
    console.log('product is already in the cart');
    let qty = data[i].qty;
    data[i].qty =qty+1;
    data[i].amount = parseFloat(data[i].amount) + parseFloat(data[i].product.price);
    added =1;
    }
    }
      if(added ==0){
      data.push({
      'product':product,
      'qty':1,
      'amount':parseFloat(product.price)
      });
      }
    }

  this.storage.set('cart',data)
  .then(
  (data)=>{
  console.log('cart Updated just now');
  console.log(data);
  this.konst.toastMsg('Cart Updated',"");
  });
  });
  }



  removeCart(item,i,cartItems,showEmptyCartMessage,total){
    let price = item.product.price;
    let qty =item.qty;
    cartItems.splice(i,1);


    this.storage.set("cart",cartItems).then(()=>{
      total = total - (price * qty);
    });

  if(cartItems.length == 0){
    showEmptyCartMessage = true;
  }

  }





















}
