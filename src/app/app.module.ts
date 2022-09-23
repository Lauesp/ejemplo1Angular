import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SumaComponent } from './calculo/suma/suma.component';
import { RestaComponent } from './calculo/resta/resta.component';

import{FormsModule} from '@angular/forms';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductoFilterPipe } from './product/producto-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SumaComponent,
    RestaComponent,
    ProductListComponent,
    ProductoFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
