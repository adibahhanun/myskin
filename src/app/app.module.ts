import { PlookupnormPage } from './../pages/plookupnorm/plookupnorm';
import { PlookupoilyPage } from './../pages/plookupoily/plookupoily';
import { PlookupcombPage } from './../pages/plookupcomb/plookupcomb';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicImageLoader } from 'ionic-image-loader';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PlooknutoxcreamPage } from './../pages/plooknutoxcream/plooknutoxcream';
import { PlooknutoxserumPage } from './../pages/plooknutoxserum/plooknutoxserum';
import { PlooknutoxcleanserPage } from './../pages/plooknutoxcleanser/plooknutoxcleanser';
import { PlookmomohimecreamPage } from './../pages/plookmomohimecream/plookmomohimecream';
import { PlooksyahirahmoisturizerPage } from './../pages/plooksyahirahmoisturizer/plooksyahirahmoisturizer';
import { PlookmomohimecleanserPage } from './../pages/plookmomohimecleanser/plookmomohimecleanser';
import { PlookoilyPage } from './../pages/plookoily/plookoily';
import { PlookupPage } from './../pages/plookup/plookup';
import { SkinanalysisquesPage } from './../pages/skinanalysisques/skinanalysisques';
import { SkinanalysisPage } from './../pages/skinanalysis/skinanalysis';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { PlookgoodvirtuestonerPage } from '../pages/plookgoodvirtuestoner/plookgoodvirtuestoner';
import { PlooksimplysitimoisturizerPage } from '../pages/plooksimplysitimoisturizer/plooksimplysitimoisturizer';
import { PlookmomohimeessencePage } from '../pages/plookmomohimeessence/plookmomohimeessence';
import { PlooknormalPage } from '../pages/plooknormal/plooknormal';
import { PlooksimplysiticleanserPage } from '../pages/plooksimplysiticleanser/plooksimplysiticleanser';
import { PlooksimplysitiserumPage } from '../pages/plooksimplysitiserum/plooksimplysitiserum';
import { PlooksimplysititonerPage } from '../pages/plooksimplysititoner/plooksimplysititoner';
import { PlooknutoxtonerPage } from '../pages/plooknutoxtoner/plooknutoxtoner';
import { PlooknutoxmoisturizerPage } from '../pages/plooknutoxmoisturizer/plooknutoxmoisturizer';
import { PlookcombPage } from '../pages/plookcomb/plookcomb';
import { PlookupdryPage } from '../pages/plookupdry/plookupdry';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    TutorialPage,
    ContactPage,
    SkinanalysisPage,
    SkinanalysisquesPage,
    PlookupPage,
    PlookoilyPage,
    PlookcombPage,
    PlookmomohimecleanserPage,
    PlookgoodvirtuestonerPage,
    PlooksimplysitimoisturizerPage,
    PlookmomohimeessencePage,
    PlooksyahirahmoisturizerPage,
    PlookmomohimecreamPage,
    PlooknormalPage,
    PlooksimplysiticleanserPage,
    PlooksimplysitiserumPage,
    PlooksimplysititonerPage,
    PlooknutoxcleanserPage,
    PlooknutoxtonerPage,
    PlooknutoxmoisturizerPage,
    PlooknutoxcreamPage,
    PlooknutoxserumPage,
    PlookupdryPage,
    PlookupnormPage,
    PlookupoilyPage,
    PlookupcombPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicImageLoader.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    TutorialPage,
    ContactPage,
    SkinanalysisPage,
    SkinanalysisquesPage,
    PlookupPage,
    PlookoilyPage,
    PlookcombPage,
    PlookmomohimecleanserPage,
    PlookgoodvirtuestonerPage,
    PlooksimplysitimoisturizerPage,
    PlookmomohimeessencePage,
    PlooksyahirahmoisturizerPage,
    PlookmomohimecreamPage,
    PlooknormalPage,
    PlooksimplysiticleanserPage,
    PlooksimplysitiserumPage,
    PlooksimplysititonerPage,
    PlooknutoxcleanserPage,
    PlooknutoxtonerPage,
    PlooknutoxmoisturizerPage,
    PlooknutoxcreamPage,
    PlooknutoxserumPage,
    PlookupdryPage,
    PlookupnormPage,
    PlookupoilyPage,
    PlookupcombPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
