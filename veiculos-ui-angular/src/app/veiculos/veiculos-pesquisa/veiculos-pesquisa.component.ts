import { Component, OnInit, ViewChild } from '@angular/core';

import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';

import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Veiculo } from 'src/app/core/model';
import { VeiculoService } from '../veiculo.service';

@Component({
  selector: 'app-veiculos-pesquisa',
  templateUrl: './veiculos-pesquisa.component.html',
  styleUrls: ['./veiculos-pesquisa.component.css']
})
export class VeiculosPesquisaComponent implements OnInit {
  
  veiculos = [];
  @ViewChild('tabela') grid!: Table;

  constructor(
    private veiculoService: VeiculoService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService) { }
  
  ngOnInit(): void {   
    this.listarVeiculos();
  }

  private listarVeiculos() {
    this.veiculoService.obterVeiculos().then(veiculos => this.veiculos = veiculos);
  }

  confirmarExclusao(veiculo: any){
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => { this.excluir(veiculo); } 
    });        
  }

  excluir(veiculo: Veiculo){
    this.veiculoService.deletar(veiculo.id)
      .then(() => {
       this.listarVeiculos();
        //this.grid.reset();          
        //this.messageService.add({severity:'success', summary:'Remoção de Veículo', detail:'Veículo removido com sucesso!'}); 
      })
      .catch(erro => this.errorHandler.handle(erro));
  }
}
