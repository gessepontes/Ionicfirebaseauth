import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { ContactService } from '../../providers/contact-service/contact-service';
import { ImagePicker } from '@ionic-native/image-picker';
import { Camera } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-edit-contatos',
  templateUrl: 'edit-contatos.html',
})
export class EditContatos {

  contactName: string;
  contactKey: string;
  contacturl: string;
  imgPath: string;
  fileToUpload: any;

  constructor(private navCtrl: NavController,
    private navParams: NavParams,
    private contactService: ContactService,
    private imagePicker: ImagePicker,
    private toastCtrl: ToastController,
    private camera: Camera) {

    this.contactKey = null;
    this.contactName = '';
    this.contacturl = '';

    if (this.navParams.data.contact) {
      this.contactName = this.navParams.data.contact.name;
      this.contactKey = this.navParams.data.contact.$key;
      this.contacturl = this.navParams.data.contact.url;
      this.imgPath =  this.contacturl;
    }
  }

  openGallery(): void {
    let cameraOptions = {
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        destinationType: 0,
        quality: 75,
        targetWidth: 1000,
        targetHeight: 1000,
        encodingType: this.camera.EncodingType.JPEG,
        correctOrientation: true,
        mediaType: 0
    }

    this.camera.getPicture(cameraOptions)
        .then(file_uri => {
          this.imgPath = 'data:image/png;base64,' + file_uri;
          this.fileToUpload = file_uri;
        },
            err => console.log(err));
}

  save() {

    let toast = this.toastCtrl.create({ duration: 3000, position: 'bottom' });

    if(this.fileToUpload == undefined){
          toast.setMessage('Por favor selecione uma imagem antes de salvar o jogador.')
          toast.present();
    }else{
      this.contactService.uploadAndSave({
        name: this.contactName,
        key: this.contactKey,
        fileToUpload: this.fileToUpload
      });

      this.navCtrl.pop();
    }
  }

  escolherFoto() {
    this.imagePicker.hasReadPermission()
      .then(hasPermission => {
        if (hasPermission) {
          this.pegarImagem();
        } else {
          this.solicitarPermissao();
        }
      }).catch(error => {
        console.error('Erro ao verificar permissão', error);
      });
  }

  solicitarPermissao() {
    this.imagePicker.requestReadPermission()
      .then(hasPermission => {
        if (hasPermission) {
          this.pegarImagem();
        } else {
          console.error('Permissão negada');
        }
      }).catch(error => {
        console.error('Erro ao solicitar permissão', error);
      });
  }

  pegarImagem() {

    this.imagePicker.getPictures({
      maximumImagesCount: 1, //Apenas uma imagem
      outputType: 1, //BASE 64   
      quality: 80
    }).then((results) => {
      for (var i = 0; i < results.length; i++) {
          console.log('Image URI: ' + results[i]);
          this.imgPath = 'data:image/png;base64,' + results[i];
          this.fileToUpload = results[i];
      }
    }, (err) => { });   
  }

}