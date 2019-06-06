import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  @Input() nombre;
  @Input() pais;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}


    salirsinArgumentos() {
      this.modalCtrl.dismiss();
    }

    salirconArgumentos() {
      this.modalCtrl.dismiss({
        nombre: 'Venancio',
        pais: 'España'

      });
    }

}
