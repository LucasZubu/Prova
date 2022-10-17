import { Component } from '@angular/core';
import { evaluate } from 'mathjs';

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

  constructor() {}

  ngOninit() {}

  realizaOperacao(){
    try{
    this.operacao = evaluate(this.operacao);
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


}
