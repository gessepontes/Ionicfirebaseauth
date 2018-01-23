import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JogadorService } from '../../providers/jogador-service/jogador-service';

@IonicPage()
@Component({
  selector: 'page-jogador-edit',
  templateUrl: 'jogador-edit.html',
})
export class JogadorEdit {

  contactName: string;
  contactKey: string;

  constructor(private navCtrl: NavController,
    private navParams: NavParams,
    private jogadorService: JogadorService) {

    this.contactKey = null;
    this.contactName = '';

    if (this.navParams.data.contact) {
      this.contactName = this.navParams.data.contact.name;
      this.contactKey = this.navParams.data.contact.$key;
    }
  }

  save() {
    this.jogadorService.save({
      name: this.contactName,
      $key: this.contactKey
    });
    this.navCtrl.pop();
  }
}