import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SumaComponent } from './calculo/suma/suma.component';
import { RestaComponent } from './calculo/resta/resta.component';

import{FormsModule} from '@angular/forms';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductoFilterPipe } from './product/producto-filter.pipe';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    SumaComponent,
    RestaComponent,
    ProductListComponent,
    ProductoFilterPipe,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
