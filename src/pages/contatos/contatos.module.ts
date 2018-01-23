import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Contatos } from './contatos';

@NgModule({
  declarations: [
    Contatos,
  ],
  imports: [
    IonicPageModule.forChild(Contatos),
  ],
})
export class ContatosModule {}
