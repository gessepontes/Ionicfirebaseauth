import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { AuthService } from '../../providers/auth/auth-service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Signin } from '../signin/signin';
import { Contatos } from '../contatos/contatos';
import { Jogador } from '../jogador/jogador';

@IonicPage()
@Component({
  selector: 'page-usuario',
  templateUrl: 'usuario.html',
})
export class Usuario {
  displayName: string;
  imgUrl: string;

  constructor(public navCtrl: NavController,
    private authService: AuthService,
    private afAuth: AngularFireAuth) {

    const authObserver = afAuth.authState.subscribe(user => {
      this.displayName = '';
      this.imgUrl = '';
      if (user) {
        this.displayName = user.displayName;
        this.imgUrl = user.photoURL;

        authObserver.unsubscribe();
      }
    });
  }

  public signOut() {
    this.authService.signOutFirebase()
      .then(() => {
        this.navCtrl.parent.parent.setRoot(Signin);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  newContact() {
    this.navCtrl.push(Contatos);
  }

  newJogador() {
    this.navCtrl.push(Jogador);
  }

}