import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FornecedorService } from '../services/fornecedor.service';
import { Subject, takeUntil} from 'rxjs';
import { Fornecedor } from '../models/fornecedor';

@Component({
  selector: 'app-home',
  templateUrl: '../views/home/home.component.html',
  styleUrl: '../views/home/home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  formConsumo!:FormGroup;

  private unsubscribe = new Subject<void>();

  constructor (
    private fb:FormBuilder,
    private fornecedorService:FornecedorService
  ){}

  ngOnInit(): void {
      this.formConsumo = this.fb.group({
        consumo: ['', Validators.required]
      });
  }
  
   onSubmit() {
    const valorConsumo = this.formConsumo.get('consumo')?.value
    if(valorConsumo){
      this.fornecedorService.get(valorConsumo).pipe(
        takeUntil(this.unsubscribe))
        .subscribe({
          next:(response:Fornecedor[]| null) => {
          },
          error:(error) => {
            console.log("Erro ao fazer requisição: ", error)
          }
        })
    } else {
      alert("Valor invalido")
    }
    this.formConsumo.reset();
  }

  ngOnDestroy(): void {
      console.log("O componente está sendo destruído!");
      this.unsubscribe.next();
      this.unsubscribe.complete();
    }
}
