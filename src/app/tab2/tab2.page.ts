import { Component } from '@angular/core';
import { number } from 'mathjs';
import { evaluate } from 'mathjs';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { MemoriaModalPage } from '../utils/memoria-modal/memoria-modal.page';
import { IMemoria } from '../models/IMemoria.models';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  operacao = '';
  resultado = '';
  mat = '';
  ultimoverica = false;
  ultimo = false;
  memoria: IMemoria[]=[];

  constructor(
    private alertController: AlertController,
    private modalCtrl: ModalController) {}

  ngOninit() {}

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: MemoriaModalPage,
      componentProps: {
        memoria : this.memoria,
      },
    });
    modal.present();  
  }

  realizaOperacao(){
    try{
    this.resultado = evaluate(this.operacao);
    }catch(err){
      this.resultado = 'Inválido!';
    }
  }

  adicionarValor(valor: any){
    this.operacao += valor;
    this.ultimo = false;

  }

  adicionarMatematica(matematica: any){
    this.mat += matematica;
    if (this.operacao.length > 0) {
      
      if ( this.ultimo == false  && this.ultimoverica == false)
      {
        this.operacao += this.mat;
        this.ultimo = true;
        this.ultimoverica = true;
      }
    }
  }

  limparMemoria(){
    this.operacao ='';
    this.resultado ='';
    this.mat = ''; 
    this.ultimo = false;
    this.ultimoverica = false;
  }

  limparOperacao(){
    this.operacao ='';
    this.mat = '';
    this.ultimo = false;
    this.ultimoverica = false;
  }

  iverterValor(){
    //Alterna
  }

  apagarCaracter(){
    if (this.operacao.length > 0) {
    this.operacao = this.operacao.substring(0, this.operacao.length -1);

      if (this.ultimoverica == true)
      {
        this.mat = '';
        this.ultimo = false;
        this.ultimoverica = false;
      }
    }
  }

  mostrarMemoria(){
    const memoria: IMemoria = this.memoria[this.memoria.length -1];
    this.operacao = memoria.operacao;
    this.resultado = memoria.resultado.toString();
    console.log('Mostrou: ', this.memoria)
  }

  limparMemoriaM(){
    this.memoria = [];
  }

  somaNamemoria(){
    if (this.operacao != ''){
      this.realizaOperacao();
      const memoria : IMemoria = this.memoria[this.memoria.length - 1];
      const novamemoria : IMemoria = {
          operacao: `${memoria.resultado} + ${this.resultado}`,
          resultado: memoria.resultado + Number(this.resultado),

      };
      this.memoria.push(novamemoria);
    }
  }

  subNamemoria(){
    if (this.operacao != ''){
      this.realizaOperacao();
      const memoria : IMemoria = this.memoria[this.memoria.length - 1];
      const novamemoria : IMemoria = {
          operacao: `${memoria.resultado} - ${this.resultado}`,
          resultado: memoria.resultado - Number(this.resultado),

      };
      this.memoria.push(novamemoria);
    }
  }

}
