import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent{

  total:number=0;
  numero1;
  numero2;
  operacion;
  op1;
  op2;
  op3;

  constructor() { }

  //value=this.sumar
 operaciones(){
  if(this.operacion.value=this.op1){
    this.sumar();
  }
  if(this.operacion=this.op1){
    this.restar();
  }
  if(this.operacion=this.op1){
    this.multiplicar();
  }
 }

restar(){
  this.total=parseInt(this.numero1)-parseInt(this.numero2);
}
multiplicar(){
  this.total=parseInt(this.numero1)*parseInt(this.numero2);
}

sumar(){
  this.total=parseInt(this.numero1)+parseInt(this.numero2);
}

}
