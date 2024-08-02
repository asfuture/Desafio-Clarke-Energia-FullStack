import { FornecedorService } from './../services/fornecedor.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Fornecedor } from '../models/fornecedor';

@Component({
  selector: 'app-fornecedor',
  templateUrl: '../views/fornecedor/fornecedor.component.html',
  styleUrls: ['../views/fornecedor/fornecedor.component.css']
})
export class FornecedorComponent implements OnInit {
  fornecedores$!: Observable<Fornecedor[]>;
  currentSlide = 0;

  constructor(private fornecedorService: FornecedorService) {}

  ngOnInit(): void {
    this.fornecedores$ = this.fornecedorService.valoresFornecedores$;
  }

  prevSlide() {
    this.fornecedores$.subscribe(fornecedores => {
      const maxSlide = fornecedores.length - 1;
      this.currentSlide = (this.currentSlide > 0) ? this.currentSlide - 1 : maxSlide;
    });
  }

  nextSlide() {
    this.fornecedores$.subscribe(fornecedores => {
      const maxSlide = fornecedores.length - 1;
      this.currentSlide = (this.currentSlide < maxSlide) ? this.currentSlide + 1 : 0;
    });
  }
}
