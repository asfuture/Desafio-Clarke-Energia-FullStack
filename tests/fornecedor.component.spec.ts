import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FornecedorComponent } from '../src/app/shared/viewmodels/fornecedor.component';
import { FornecedorService } from '../src/app/shared/services/fornecedor.service';
import { Fornecedor } from '../src/app/shared/models/fornecedor';
import { of } from 'rxjs';

describe('FornecedorComponent', () => {
  let component: FornecedorComponent;
  let fixture: ComponentFixture<FornecedorComponent>;
  let fornecedorServiceMock: any;

  beforeEach(async () => {
    fornecedorServiceMock = {
      valoresFornecedores$: of([{ nome: 'Fornecedor 1' }, { nome: 'Fornecedor 2' }] as Fornecedor[])
    };

    await TestBed.configureTestingModule({
      declarations: [FornecedorComponent],
      providers: [
        { provide: FornecedorService, useValue: fornecedorServiceMock }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FornecedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize fornecedores$ on init', () => {
    component.ngOnInit();
    component.fornecedores$.subscribe(fornecedores => {
      expect(fornecedores.length).toBe(2);
      expect(fornecedores[0].nome).toBe('Fornecedor 1');
    });
  });

  it('should set currentSlide to 0 initially', () => {
    expect(component.currentSlide).toBe(0);
  });

  it('should navigate to the previous slide', () => {
    component.ngOnInit();
    component.fornecedores$.subscribe(() => {
      component.currentSlide = 1; // Set slide to 1 (second item)
      component.prevSlide();
      expect(component.currentSlide).toBe(0); // Should go back to slide 0

      component.prevSlide();
      expect(component.currentSlide).toBe(1); // Should go to slide 1 (circular navigation)
    });
  });

  it('should navigate to the next slide', () => {
    component.ngOnInit();
    component.fornecedores$.subscribe(() => {
      component.currentSlide = 0; // Set slide to 0 (first item)
      component.nextSlide();
      expect(component.currentSlide).toBe(1); // Should go to slide 1

      component.nextSlide();
      expect(component.currentSlide).toBe(0); // Should go back to slide 0 (circular navigation)
    });
  });
});
