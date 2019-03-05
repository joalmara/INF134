import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { SuccessPage } from './success/success.page';
import { EnrolledClassPage } from './enrolled-class/enrolled-class.page';
import { AskquestionPage } from './askquestion/askquestion.page'


@NgModule({
  declarations: [AppComponent, SuccessPage, EnrolledClassPage, AskquestionPage],
  entryComponents: [SuccessPage, EnrolledClassPage, AskquestionPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
