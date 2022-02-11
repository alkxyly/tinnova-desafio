import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Veiculo } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  url = 'http://localhost:8080/veiculos';

  constructor(private http: HttpClient) { }

  obterVeiculos(): Promise<Veiculo[]>{
    return this.http.get(`${this.url}`)
      .toPromise()
      .then(response => response as Veiculo[]);   
  }

  cadastrar(veiculo: Veiculo): Promise<Veiculo>{
    return this.http.post(`${this.url}`, veiculo)
      .toPromise()
      .then(response => response as Veiculo);
  }

  buscarPorId(id: number): Promise<Veiculo>{
    return this.http.get(`${this.url}/${id}`)
      .toPromise()
      .then(response => response as Veiculo);
  }

  atualizar(veiculo: Veiculo): Promise<Veiculo>{
    return this.http.put(`${this.url}/${veiculo.id}`, veiculo)
      .toPromise()
      .then(response => response as Veiculo);
  }

  deletar(id: number): Promise<void>{
    return this.http.delete(`${this.url}/${id}`)
      .toPromise()
      .then(() => null);
  }
}
