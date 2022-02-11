import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';


import { VeiculosPesquisaComponent } from './veiculos-pesquisa/veiculos-pesquisa.component';
import { VeiculosRountingModule } from './veiculos-routing.module';
import { VeiculosCadastroComponent } from './veiculos-cadastro/veiculos-cadastro.component';
import { InputTextModule } from 'primeng/inputtext';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    VeiculosPesquisaComponent,
    VeiculosCadastroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,

    TableModule,
    ButtonModule,
    InputTextModule,
    SharedModule,
    VeiculosRountingModule    
  ],
  providers:[]
})
export class VeiculoModule { }
