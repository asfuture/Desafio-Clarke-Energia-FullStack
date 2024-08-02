import { FornecedorService } from './../services/fornecedor.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Fornecedor } from '../models/fornecedor';

@Component({
  selector: 'app-fornecedor',
  templateUrl: '../views/fornecedor/fornecedor.component.html',
  styleUrl: '../views/fornecedor/fornecedor.component.css'
})
export class FornecedorComponent implements OnInit {
  fornecedores$!: Observable<Fornecedor[]>;
  
  constructor(private fornecedorService:FornecedorService) {
  }

  ngOnInit(): void {
    this.fornecedores$ = this.fornecedorService.valoresFornecedores$
  }
}
