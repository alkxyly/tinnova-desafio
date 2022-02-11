import { Component, OnInit } from '@angular/core';
import { VeiculoService } from '../veiculo.service';

@Component({
  selector: 'app-veiculos-pesquisa',
  templateUrl: './veiculos-pesquisa.component.html',
  styleUrls: ['./veiculos-pesquisa.component.css']
})
export class VeiculosPesquisaComponent implements OnInit {
  
  veiculos = [];

  constructor(private veiculoService: VeiculoService){}

  ngOnInit(): void {   
    this.veiculoService.obterVeiculos().then(veiculos => this.veiculos = veiculos);
  }

}
