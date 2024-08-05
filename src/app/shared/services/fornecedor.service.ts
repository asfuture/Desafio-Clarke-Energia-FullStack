import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { Fornecedor } from '../models/fornecedor';
import {BehaviorSubject, Observable, tap, map, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FornecedorService {
  private readonly apiUrl:string = environment.apiUrl;
  private fornecedoresDisponiveis = new BehaviorSubject<Fornecedor[]>([]);
  valoresFornecedores$ = this.fornecedoresDisponiveis.asObservable();
  
  exibirValoresFornecedores(fornecedores:Fornecedor[]):void{
    this.fornecedoresDisponiveis.next(fornecedores)
  }

  constructor(private http:HttpClient) { }

  get(consumo: number): Observable<Fornecedor[]> {
    //console.log("consumo", consumo)
    return this.http.get<Fornecedor[]>(`${this.apiUrl}/fornecedores`).pipe(
        map(valores => 
            valores.filter(fornecedor => fornecedor.limite_minimo_kWh <= consumo)),
        tap(filteValor => this.exibirValoresFornecedores(filteValor)),
        catchError(error => {
            console.log("Error ao buscar fornecedores:", error);
            return of([]); // Retorna um array vazio
        })
    );
  }
}
