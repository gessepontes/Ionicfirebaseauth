import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Signin } from '../pages/signin/signin';
import { SigninWithEmail } from '../pages/signinwithemail/signinwithemail';
import { Signup } from '../pages/signup/signup';
import { Resetpassword } from '../pages/resetpassword/resetpassword';
import { EditContatos } from '../pages/edit-contatos/edit-contatos';
import { Usuario } from '../pages/usuario/usuario';
import { Contatos } from '../pages/contatos/contatos';

import { JogadorEdit } from '../pages/jogador-edit/jogador-edit';
import { Jogador } from '../pages/jogador/jogador';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';

import { AuthService } from '../providers/auth/auth-service';
import { ContactService } from '../providers/contact-service/contact-service';
import { JogadorService } from '../providers/jogador-service/jogador-service';
import { ImagePicker } from '@ionic-native/image-picker';
import { Camera } from '@ionic-native/camera';

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Signin,
    SigninWithEmail,
    Signup,
    Resetpassword,
    EditContatos,
    Usuario,
    Contatos,
    JogadorEdit,
    Jogador
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Signin,
    SigninWithEmail,
    Signup,
    Resetpassword,
    EditContatos,
    Usuario,
    Contatos,
    JogadorEdit,
    Jogador
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    ContactService,
    JogadorService,
    ImagePicker,
    Camera
  ]
})
export class AppModule {}
