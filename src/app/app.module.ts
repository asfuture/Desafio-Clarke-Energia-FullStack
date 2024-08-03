import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

import { HomeComponent } from './shared/viewmodels/home.component';
import { FornecedorComponent } from './shared/viewmodels/fornecedor.component';
import { FornecedorService } from './shared/services/fornecedor.service';
import { HeaderComponent } from './shared/viewmodels/header.component';
import { FooterComponent } from './shared/viewmodels/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FornecedorComponent,
    HeaderComponent,
    FooterComponent
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
