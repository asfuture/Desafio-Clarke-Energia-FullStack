import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

import { HomeComponent } from './shared/viewmodels/home.component';
import { FornecedorComponent } from './shared/viewmodels/fornecedor.component';
import { FornecedorService } from './shared/services/fornecedor.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FornecedorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    
  ],
  providers: [
    FornecedorService,
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
