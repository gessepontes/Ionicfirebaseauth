import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { EditContatos } from '../edit-contatos/edit-contatos';
import { ContactService } from '../../providers/contact-service/contact-service';
import {  AngularFireList } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-contatos',
  templateUrl: 'contatos.html'
})

export class Contatos {
  items: AngularFireList<any[]>;

  constructor(private navCtrl: NavController, private contactService: ContactService) {
    this.items = this.contactService.getAll();
  }

  newContact() {
    this.navCtrl.push(EditContatos);
  }

  editItem(item: any) {
    this.navCtrl.push(EditContatos, { contact: item });
  }

  removeItem(item: any) {
    this.contactService.remove(item);
  }

}