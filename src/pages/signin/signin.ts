import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { User } from '../../providers/auth/user';
import { AuthService } from '../../providers/auth/auth-service';
import { HomePage } from '../home/home';
import { Signup } from '../signup/signup';
import { SigninWithEmail } from '../signinwithemail/signinwithemail';
import { Resetpassword } from '../resetpassword/resetpassword';

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class Signin {
  user: User = new User();
  @ViewChild('form') form: NgForm;

  constructor(
    public navCtrl: NavController,
    private toastCtrl: ToastController,
    private authService: AuthService) {
  }

  createAccount() {
    this.navCtrl.push(Signup);
  }

  signInWithEmailPage() {
    this.navCtrl.push(SigninWithEmail);
  }

  resetPage() {
    this.navCtrl.push(Resetpassword);
  }
}