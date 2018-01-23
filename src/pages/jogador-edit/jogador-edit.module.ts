import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JogadorEdit } from './jogador-edit';

@NgModule({
  declarations: [
    JogadorEdit,
  ],
  imports: [
    IonicPageModule.forChild(JogadorEdit),
  ],
})
export class JogadorEditModule {}
