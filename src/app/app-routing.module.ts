import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SumaComponent } from './calculo/suma/suma.component';
import { ProductListComponent } from './product/product-list/product-list.component';

const routes: Routes = [
  {path:'', component:ProductListComponent},
  {path:'suma', component:SumaComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
