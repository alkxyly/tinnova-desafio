
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VeiculosCadastroComponent } from "./veiculos-cadastro/veiculos-cadastro.component";

import { VeiculosPesquisaComponent } from "./veiculos-pesquisa/veiculos-pesquisa.component";


const routes: Routes = [
    { path: 'veiculos', component: VeiculosPesquisaComponent},
    { path: 'veiculos/cadastrar', component: VeiculosCadastroComponent},
    { path: 'veiculos/:id', component: VeiculosCadastroComponent}
  ]
@NgModule({   
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class VeiculosRountingModule { }
  