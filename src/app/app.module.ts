import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ChatPage}from '../pages/chat/chat';
import {NotificationPage} from '../pages/notification/notification';
import {DiscoveryPage} from '../pages/discovery/discovery';
import {MorePage} from '../pages/more/more';
import {LoginPage} from '../pages/login/login';
import {UserPage} from '../pages/user/user';
import {HeadfacePage} from '../pages/headface/headface';
import {RegisterPage} from '../pages/register/register';
import { TabsPage } from '../pages/tabs/tabs';
import { DetailsPage } from '../pages/details/details';
import { QuestionPage } from '../pages/question/question';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';
import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import {IonicStorageModule } from '@ionic/storage';
import {Camera} from '@ionic-native/camera';
import { File } from '@ionic-native/file';

import {Transfer,TransferObject} from '@ionic-native/transfer';
// TransferObject
import {FilePath} from '@ionic-native/File-path';
import { AnswerPage } from '../pages/answer/answer';
import { ChatdetailsPage } from '../pages/chatdetails/chatdetails';
import { EmojiProvider } from '../providers/emoji/emoji';
import {ComponentsModule} from '../components/components.module'
import { ChatserviceProvider } from '../providers/chatservice/chatservice';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage,
    MorePage,
    NotificationPage,
    DiscoveryPage,
    TabsPage,
    LoginPage,
    AnswerPage,
    UserPage,
    RegisterPage,
    HeadfacePage,
    QuestionPage,
    ChatdetailsPage,
    DetailsPage,
  
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,//全局导入
    IonicModule.forRoot(MyApp,{
backButtonText:'返回',
    }),
    ComponentsModule,
    IonicStorageModule.forRoot(),
    // 把全局的module 管控起来
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MorePage,
    ChatPage,
    NotificationPage,
    DiscoveryPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    UserPage,
    HeadfacePage,
    QuestionPage,
    DetailsPage,
    AnswerPage,
    ChatdetailsPage,
  

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    Camera,
    File,
    Transfer,
    FilePath,
    EmojiProvider,
    ChatserviceProvider,
  ]
})
export class AppModule {}