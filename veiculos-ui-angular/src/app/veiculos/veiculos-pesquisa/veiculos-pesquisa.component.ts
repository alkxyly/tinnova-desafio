import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { Veiculo } from 'src/app/core/model';
import { VeiculoService } from '../veiculo.service';

@Component({
  selector: 'app-veiculos-pesquisa',
  templateUrl: './veiculos-pesquisa.component.html',
  styleUrls: ['./veiculos-pesquisa.component.css']
})
export class VeiculosPesquisaComponent implements OnInit {
  
  veiculos = [];

  constructor(
    private veiculoService: VeiculoService,
    private confirmationService: ConfirmationService
  ){}

  ngOnInit(): void {   
    this.veiculoService.obterVeiculos().then(veiculos => this.veiculos = veiculos);
  }

  excluir(veiculo: Veiculo){
    
  }

  confirmarExclusao(veiculo: any){
    console.log('confir excluir');
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => { this.excluir(veiculo); } 
    });        
  }
}
