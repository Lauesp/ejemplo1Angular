import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SumaComponent } from './calculo/suma/suma.component';
import { TablaComponent } from './calculo/tabla/tabla.component';
import { CineComponent } from './calculo/cine/cine.component';
import { ProductListComponent } from './product/product-list/product-list.component';


const routes: Routes = [
  {path:'', component:ProductListComponent},
  {path:'suma', component:SumaComponent},
  {path:'tabla', component:TablaComponent},
  {path: 'cine', component:CineComponent},
  {path: 'product', component:ProductListComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
