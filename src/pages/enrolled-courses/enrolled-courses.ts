import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Page2 } from '../page2/page2';
/*
  Generated class for the EnrolledCourses page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-enrolled-courses',
  templateUrl: 'enrolled-courses.html'
})
export class enrolledCourses {
  posts:any=[{"title":"Introduction to Computer Science",
      "image":"https://lh5.ggpht.com/ITepKi-2pz4Q6lrLfv6QDNViEGIfxyupzgQwx1YgS4L8m3MFITBKWDpaZb_VoAP-zV3bEEoIbFY7mauj8HM=s0",
      "moocsite":"Udacity",
      "organization":"Udacity"},
      {
      "title":"Machine Learning",
      "image":"https://d15cw65ipctsrr.cloudfront.net/30/d6ee30352d11e4b07f0965d0c0162f/large-icon.png",
      "moocsite":"Coursera",
      "organization":"Stanford University"
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
    /*
    this.posts=[{
      "title":this.title,
      "image":this.img,
      "moocsite":this.ms,
      "organization":this.org
    }]
    */
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnrolledCoursesPage');
  }
  
  navPage2(post)
  {
    this.navCtrl.push(Page2,post);
  }


}
