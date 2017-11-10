import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import {Platform} from 'ionic-angular';
import { InAppBrowser } from 'ionic-native';
import { enrolledCourses } from '../enrolled-courses/enrolled-courses';
import { wishlist } from '../wishlist/wishlist';

import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2{
  
  posts: any;
  video:any;
  url:any;
  x:number;
  searchQuery: string = '';
  items: string[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http,public platform: Platform) {
    this.platform = platform;
    this.x=parseInt(this.navParams.get('upvotes'))+1;
   this.http.get('http://192.168.81.1:8080/coursesapi.json').map(res => res.json()).subscribe(
    data => {
        this.posts = data.courses;
    },
    err => {
        console.log("Oops!");
      }
    );
  }
  openUrl() {
        this.url=this.navParams.get('url');
        console.log(this.url);
        this.platform.ready().then(() => {
            new InAppBrowser(this.url,'_blank');
        });
  }

  resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
  }

  navEC(post)
  {
    this.navCtrl.push(enrolledCourses,post);
  }

  navWL(post)
  {
    this.navCtrl.push(wishlist,post);
  }
  
  ionViewDidLoad() {
  }
}
