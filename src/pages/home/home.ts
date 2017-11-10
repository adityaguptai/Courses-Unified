import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Page2 } from '../page2/page2';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class home{
  posts: any;
  realdata:any;
  upvotes:number=0;
  rating:number=0.0;
  showElement=false;
  up=true;
  toggle=false;
  x:number;
  lev:any;
  constructor(public navCtrl: NavController, public http: Http) {
    //this.navCtrl.setRoot(home);
    this.http.get('http://192.168.81.1:8080/coursesapi.json').map(res => res.json()).subscribe(
    data => {
        this.realdata = data.courses;
         this.posts=data.courses;
    },
    err => {
        console.log("Oops!");
     }
    );
    //this.posts=JSON.parse(JSON.stringify('this.realdata'));
   
  }
  resetdata()
  {
    this.posts = this.realdata; 
  }
  filterdataupvotes(){
    this.posts = this.realdata;
    this.posts = this.posts.filter((courses)=>{
      return courses.upvotes>this.upvotes;
    })
  }
  /*
  filterdatarating(rating){
    this.posts = this.realdata;
    this.posts = this.posts.filter((courses)=>{
      return courses.ratings>rating;
    })
  }
  */
  navPage2(post)
  {
    this.navCtrl.push(Page2,post);
  }
  
  flaginv(){
    this.showElement=!this.showElement;
  }
  incupvotes(upvotes)
  {
    this.up=!this.up;
    this.x=parseInt(upvotes)+1;
    this.toggle=true;
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.posts = this.realdata;

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.posts = this.posts.filter((courses) => {
        return (courses.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  level()
  {
    //let lev=document.getElementById('radio').value;
    this.posts = this.realdata;
    //console.log(this.lev);
    if(this.lev=="beg")
    {
      //console.log('hi');
      this.posts = this.posts.filter((courses)=>{
      return courses.knowledge_level=="Beginner";
       })
    }
    else if(this.lev=="int")
    {
      this.posts = this.posts.filter((courses)=>{
      return courses.knowledge_level=="Intermediate";
       })
    }
    else if(this.lev=="adv")
    {
      this.posts = this.posts.filter((courses)=>{
      return courses.knowledge_level=="Advanced";
       })
    }
  }
}
