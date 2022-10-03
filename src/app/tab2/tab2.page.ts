import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  operacao = '';
  resultado = '';
  mat = '';

  constructor() {}

  ngOninit() {}

  adicionarValor(valor: any){
    this.operacao += valor;
  }

  adicionarMatematica(matematica: any){
    this.mat += matematica;
    if (this.operacao != '') {
      if ( this.mat.length == 1 ){
        this.operacao += this.mat;
      }
    }
  }

  limparMemoria(){
    this.operacao ='';
    this.resultado ='';
    this.mat = ''; 
  }

  limparOperacao(){
    this.operacao ='';
    this.mat = ''
  }

  iverterValor(){
    //Alterna
  }

  apagarCaracter(){
    if (this.operacao.length > 0) {
    this.operacao = this.operacao.substring(0, this.operacao.length -1);
    }
  }


}
