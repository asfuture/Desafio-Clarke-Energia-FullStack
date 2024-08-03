import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from '../src/app/shared/viewmodels/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FornecedorService } from '../src/app/shared/services/fornecedor.service';
import { of, throwError } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let fornecedorServiceMock: any;

  beforeEach(async () => {
    fornecedorServiceMock = {
      get: jest.fn()
    };

    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: FornecedorService, useValue: fornecedorServiceMock }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize formConsumo on init', () => {
    expect(component.formConsumo).toBeDefined();
    expect(component.formConsumo.get('consumo')).toBeDefined();
  });

  it('should call fornecedorService.get on valid form submission', () => {
    const mockConsumoValue = 100;
    component.formConsumo.setValue({ consumo: mockConsumoValue });
    
    fornecedorServiceMock.get.mockReturnValue(of([]));
    
    component.onSubmit();
    
    expect(fornecedorServiceMock.get).toHaveBeenCalledWith(mockConsumoValue);
  });

  it('should handle service error correctly', () => {
    const mockConsumoValue = 100;
    component.formConsumo.setValue({ consumo: mockConsumoValue });
    
    fornecedorServiceMock.get.mockReturnValue(throwError(() => new Error('Service Error')));
    
    const consoleSpy = jest.spyOn(console, 'log');
    
    component.onSubmit();
    
    expect(consoleSpy).toHaveBeenCalledWith('Erro ao fazer requisição: ', new Error('Service Error'));
  });

  it('should alert and reset form on invalid input', () => {
    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
    
    component.formConsumo.setValue({ consumo: '' });
    component.onSubmit();
    
    expect(alertSpy).toHaveBeenCalledWith('Valor invalido');
    expect(component.formConsumo.value).toEqual({ consumo: null });
  });

  it('should reset form after valid submission', () => {
    const mockConsumoValue = 100;
    component.formConsumo.setValue({ consumo: mockConsumoValue });
    
    fornecedorServiceMock.get.mockReturnValue(of([]));
    
    component.onSubmit();
    
    expect(component.formConsumo.value).toEqual({ consumo: null });
  });

  it('should complete the subscription on destroy', () => {
    const nextSpy = jest.spyOn(component['unsubscribe'], 'next');
    const completeSpy = jest.spyOn(component['unsubscribe'], 'complete');
    
    component.ngOnDestroy();
    
    expect(nextSpy).toHaveBeenCalled();
    expect(completeSpy).toHaveBeenCalled();
  });
});
