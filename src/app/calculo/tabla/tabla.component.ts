import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent{


  numero;
  tablaRes:string[]=[];

  constructor() {
    this.tablaRes =[];
   }

  ngOnInit():void{

  }
  tablam():void{
    for(let i=1; i<11; ++i){
      this.tablaRes[i]=`${this.numero} x ${i} = ${i*this.numero}`;
    }
  }


}
