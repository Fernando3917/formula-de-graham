import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PrecojustoComponent } from './precojusto/precojusto.component';
import { PrecoJustoModule } from './precojusto/precojusto.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent  
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrecoJustoModule,
    FormsModule 
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
