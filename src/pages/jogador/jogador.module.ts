import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Jogador } from './jogador';

@NgModule({
  declarations: [
    Jogador,
  ],
  imports: [
    IonicPageModule.forChild(Jogador),
  ],
})
export class JogadorModule {}
