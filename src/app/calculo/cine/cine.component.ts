import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-cine',
  templateUrl: './cine.component.html',
  styleUrls: ['./cine.component.css']
})
export class CineComponent implements OnInit {

  //calculos
  totalCine:number=0;
  limiteBoletos:number=0;
  bloqueo:string='';
  descuento1:number=-0.10;
  descuento2:number=-0.15;

  //Entradas del cliente
  nombreCli:string='';
  cantidadClientes:number=0;
  boletos:number=0;
  tarjeta :string='';


  constructor() { }

  ngOnInit(): void {
  }

  cineCal():void{
  //establecer limite de boletos que se pueden comprar
   if(this.cantidadClientes>0){
      this.limiteBoletos=this.cantidadClientes*7;
        // Limite de boletos
        if(this.limiteBoletos/this.cantidadClientes>7)
        {
          this.bloqueo=(`Venta máxima de 7 boleto por persona :(`);
        }
        else if(this.limiteBoletos/this.cantidadClientes<=7){
              //calcular precio sin descuento por menos de 2 boletos
              if(this.boletos/this.cantidadClientes<=2){
                this.totalCine=(this.boletos*12)
                  //validar descuento de tarjeta
                  if(this.tarjeta == 'si'){
                    this.totalCine=this.totalCine-(this.totalCine*this.descuento1);
                  }
                  else if(this.tarjeta == 'no'){
                    this.totalCine;
                  }
              }
              //descuento de mas de 2 boletos pero menos de 5
              if(this.boletos/this.cantidadClientes>=3 && this.boletos/this.cantidadClientes<=5){
                this.totalCine=(this.boletos*12)-((this.boletos*12)*this.descuento1);
                  //validar descuento de tarjeta
                  if(this.tarjeta == 'si'){
                    this.totalCine=this.totalCine-(this.totalCine*this.descuento1);
                  }
                  else if(this.tarjeta == 'no'){
                    this.totalCine;
                  }
              }
              //descuento de mas de 5 boletos pero no mas de 7
              if(this.boletos/this.cantidadClientes>=5 && this.boletos/this.cantidadClientes<=7){
                this.totalCine=(this.boletos*12)-((this.boletos*12)*this.descuento2);
                  //validar descuento de tarjeta
                  if(this.tarjeta == 'si'){
                    this.totalCine=this.totalCine-(this.totalCine*this.descuento1);
                  }
                  else if(this.tarjeta == 'no'){
                    this.totalCine;
                  }
              }
              //validar descuento de tarjeta
              /*if(this.tarjeta == 'si'){
                this.totalCine=this.totalCine-(this.totalCine*this.descuento1);
              }
              else if(this.tarjeta == 'no'){
                this.totalCine;
              }*/
            }
   }
   
   
  
  }
  }
