import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { home } from '../pages/home/home';
import { Page2 } from '../pages/page2/page2';
import { enrolledCourses } from '../pages/enrolled-courses/enrolled-courses';
import { login } from '../pages/login/login';
import { signup } from '../pages/signup/signup';
import { wishlist } from '../pages/wishlist/wishlist';
import { Youtube } from '../pipes/youtube';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import {CloudSettings,CloudModule} from '@ionic/cloud-angular';
const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'e95b1cef'
  },
  'auth': {
    'google': {
      'webClientId': '297520954949-3lebefe46k0k7rtuctl0i3pc811pg89e.apps.googleusercontent.com',
      'scope': []
    }
  }
}


@NgModule({
  declarations: [
    MyApp,
    home,
    Page2,
    login,
    enrolledCourses,
    signup,
    wishlist,
    Youtube
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    home,
    Page2,
    login,
    wishlist,
    enrolledCourses
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
