import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditContatos } from './edit-contatos';

@NgModule({
  declarations: [
    EditContatos,
  ],
  imports: [
    IonicPageModule.forChild(EditContatos),
  ],
})
export class EditContatosModule {}
