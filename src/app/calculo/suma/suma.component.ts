import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent{

  total:number=0;
  numero1: string='';
  numero2: string='';
  operacion :string='';
  calcula:string='';

  constructor() { }

  //value=this.sumar


sumar():void{
    if(this.operacion == 'suma'){
      this.total=parseInt(this.numero1)+parseInt(this.numero2);
    }
    if(this.operacion == 'resta'){
      this.total=parseInt(this.numero1)-parseInt(this.numero2);
    }
    if(this.operacion == 'multiplicacion'){
      this.total=parseInt(this.numero1)*parseInt(this.numero2);
    }
    if(this.operacion == 'division'){
      this.total=parseInt(this.numero1)/parseInt(this.numero2);
    }
  }
   // this.total=parseInt(this.numero1)+parseInt(this.numero2);

}


