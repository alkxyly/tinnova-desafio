import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ConfirmationService, MessageService } from 'primeng/api';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VeiculoService } from './veiculos/veiculo.service';
import { VeiculoModule } from './veiculos/veiculo.module';



@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    CoreModule,
    VeiculoModule,

    AppRoutingModule
  ],
  exports:[],
  providers: [VeiculoService, MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
