import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GoogleAuth, User } from '@ionic/cloud-angular';
import { home } from '../home/home';

import { LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class login {
  posts:any;
  username:any;
  password:any;
  loader:any;
  showElement=false;
  constructor(public navCtrl: NavController, public navParams: NavParams,public googleAuth: GoogleAuth, public user: User, public http: Http,public loadingCtrl: LoadingController) {
    this.http.get('http://192.168.81.1:8080/coursesapi.json').map(res => res.json()).subscribe(
    data => {
         this.posts=data.courses;
    },
    err => {
        console.log("Oops!");
     }
    );
  }
 
  presentLoading() {
    let loading = this.loadingCtrl.create({
    content: 'Logging you In! Please wait...'
    });
    loading.onDidDismiss(() => {
      console.log('Dismissed loading');
    });

  loading.present();

  setTimeout(() => {
    loading.dismiss();
  }, 4000);
  }
  googlesign(){
    this.googleAuth.login().then((success) => {
    alert('Logged In!');
    alert(JSON.stringify(success));
    });
  }
  authorize()
  {
    //let i=0;
    //this.posts = JSON.parse(jsonString);
    //let n=Object.keys(this.posts.credentials[0]).length;
   // console.log(n);
   
   if((this.username=="aditya@gmail.com" && this.password=="xyz123")||(this.username=="xyz@lpu.com" && this.password=="xyz123"))
   {
     this.showElement=false;
      this.navCtrl.push(home);
      //this.navCtrl.pop();
   }
   else {
    this.showElement=true;
  }
  }
}
