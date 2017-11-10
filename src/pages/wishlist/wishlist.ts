import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Page2 } from '../page2/page2';
/*
  Generated class for the Wishlist page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  selector: 'page-wishlist',
  templateUrl: 'wishlist.html'
})
export class wishlist {
   posts:any=[{"title":"Algorithms, Part I",
      "image":"http://algs4.cs.princeton.edu/cover.png",
      "moocsite":"Coursera",
      "organization":"Princeton University"},
      {"title":"The Data Scientist’s Toolbox",
      "image":"https://media.licdn.com/mpr/mpr/p/3/005/09f/033/0ae904a.jpg",
      "moocsite":"Coursera",
      "organization":"Johns Hopkins University"

      }];
  title:any;
  img:any;
  ms:any;
  org:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title=this.navParams.get('title');
    this.img=this.navParams.get('image');
    this.ms=this.navParams.get('moocsite');
    this.org=this.navParams.get('organization');
    this.posts.push({title:this.title,image:this.img,moocsite:this.ms,organization:this.org});
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad WishlistPage');
  }

  navPage2(post)
  {
    this.navCtrl.push(Page2,post);
  }
}
