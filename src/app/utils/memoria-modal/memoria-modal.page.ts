import { Component, OnInit } from '@angular/core';
import { IMemoria } from 'src/app/models/IMemoria.models';
import { ModalController } from '@ionic/angular';
import { Tab2Page } from 'src/app/tab2/tab2.page';

@Component({
  selector: 'app-memoria-modal',
  templateUrl: './memoria-modal.page.html',
  styleUrls: ['./memoria-modal.page.scss'],
})
export class MemoriaModalPage implements OnInit {
  memoria: IMemoria[]=[];
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: Tab2Page
    });
    modal.present();
  }

}
