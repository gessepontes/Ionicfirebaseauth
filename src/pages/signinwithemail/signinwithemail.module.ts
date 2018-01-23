import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SigninWithEmail } from './signinwithemail';

@NgModule({
  declarations: [
    SigninWithEmail,
  ],
  imports: [
    IonicPageModule.forChild(SigninWithEmail),
  ],
})
export class SigninwithemailModule {}
