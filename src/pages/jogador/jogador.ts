import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { JogadorEdit } from '../jogador-edit/jogador-edit';
import { JogadorService } from '../../providers/jogador-service/jogador-service';
import {  AngularFireList } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-jogador',
  templateUrl: 'jogador.html'
})

export class Jogador {
  items: AngularFireList<any[]>;

  constructor(private navCtrl: NavController, private contactService: JogadorService) {
    this.items = this.contactService.getAll();
  }

  newItem() {
    this.navCtrl.push(JogadorEdit);
  }

  editItem(item: any) {
    this.navCtrl.push(JogadorEdit, { contact: item });
  }

  removeItem(item: any) {
    this.contactService.remove(item);
  }

}