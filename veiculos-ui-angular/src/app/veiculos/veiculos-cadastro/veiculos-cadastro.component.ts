import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Veiculo } from 'src/app/core/model';
import { VeiculoService } from '../veiculo.service';

@Component({
  selector: 'app-veiculos-cadastro',
  templateUrl: './veiculos-cadastro.component.html',
  styleUrls: ['./veiculos-cadastro.component.css']
})
export class VeiculosCadastroComponent implements OnInit {

  veicul: Veiculo = new Veiculo();
  editando: boolean = false;
  
  constructor(
    private veiculoService: VeiculoService,
    private title: Title,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,) {}

  ngOnInit(): void {
    
    const idVeiculo = this.route.snapshot.params['id'];

    if(idVeiculo)
      this.buscarPorId(idVeiculo);
    
    this.title.setTitle('Cadastro de Veículos');
  }

  salvar(form: NgForm){
    const idVeiculo = this.route.snapshot.params['id'];
    if(idVeiculo)
      this.atualizar(form);
    else 
      this.cadastrar(form);
  }

  atualizar(form: NgForm){
    console.log('atualizar');
    this.veiculoService.atualizar(this.veicul)
      .then(() => {
        this.messageService.add({severity:'success', summary:'Atualização', detail:'Veículo atualizado com sucesso!'});
        this.editando = false;
      })
      .catch(erro => this.messageService.add({severity:'error', summary:'Atualização', detail:'Erro ao atualizar veículo!'}));
  }
   
  cadastrar(form: NgForm){
    this.veiculoService.cadastrar(this.veicul).then(response => {
      this.messageService.add({severity:'success', summary:'Cadastro de Veículo', detail:'Veículo Cadastrado com Sucesso'});
      form.reset();
      this.veicul = new Veiculo();
    })
    .catch(erro => this.messageService.add({severity:'error', summary:'Cadastro de Veículo', detail:'Erro ao Cadastrar Veículo'}));
  }

  buscarPorId(id: number){
    if(id){
      this.veiculoService.buscarPorId(id).then(veiculo =>{
          this.veicul  = veiculo;
          this.atualizarTituloEdicao();         
      })
      .catch(erro => this.messageService.add({severity:'error', summary:'Edição de Veículo', detail:'Erro ao Buscar Veículo'})); 
    }    
  }


  get editandoVeiculo(){
    return Boolean(this.veicul.id);
  }

  atualizarTituloEdicao(){
    this.title.setTitle(`Edição de Veículo: ${this.veicul.veiculo}`);
  }

  deletar(veiculo: Veiculo){
    this.veiculoService.deletar(veiculo.id)
      .then(() => {
        this.veicul = new Veiculo();
        this.messageService.add({severity:'success', summary:'Remoção de Veículo', detail:'Veículo removido com sucesso!'});
      })
      .catch(erro => this.messageService.add({severity:'error', summary:'Remoção de Veículo', detail:'Erro ao remover veículo!'}));
  }

  novo(form: NgForm){
    form.reset();
    setTimeout(function(){
      this.veicul = new Veiculo();   
    }.bind(this), 1);  // para limpar o formulario

    this.router.navigate(['/veiculos/cadastrar']);
  }

}
