import { Component, OnInit } from '@angular/core';
import { IProducto } from '../producto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  imagewidth:number=100;
  imageMarge:number=2;
  muestraImg:boolean=false;
  listFilter:string='';

  constructor() { }

  mostrarImagen():void{
    this.muestraImg=!this.muestraImg;
  }

  products:IProducto[]=[
  {
    "product1":1,
    "productName":'Demon Dayz',
    "descripcion":'CD Gorillaz Demon Days',
    'listFilter':'',
    "createDate":"Septiembre, 22, 2022",
    "price":300,
    "rating":3.6,
    "imageUrl":"https://http2.mlstatic.com/gorillaz-demon-days-disco-nuevo-original-cd-D_NQ_NP_838771-MLM25637589604_062017-F.jpg"
  },
  {
    "product1":2,
    "productName":'D-Sides',
    "descripcion":'CD Gorillaz D-Sides',
    'listFilter':'',
    "createDate":"Septiembre, 22, 2022",
    "price":350,
    "rating":4.0,
    "imageUrl":"https://i.pinimg.com/originals/e6/39/88/e63988aa98d7d01cc07462e5a130c725.jpg"
  }
]

  ngOnInit(): void {
  }

}
