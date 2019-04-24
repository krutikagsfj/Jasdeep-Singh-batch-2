import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{Ng2SearchPipeModule} from 'ng2-search-filter';
import { AboutComponent } from './component/about/about.component';
import { HomeComponent } from './component/home/home.component';

import { HttpClientModule} from '@angular/common/http';
import { ProdcutBrandComponent } from './component/prodcut-brand/prodcut-brand.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ProdcutBrandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    HttpClientModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
