import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { FornecedorService } from '../src/app/shared/services/fornecedor.service';
import { Fornecedor } from '../src/app/shared/models/fornecedor';
import { environment } from '../src/environments/environment';
describe('FornecedorService', () => {
  let service: FornecedorService;
  let httpMock: HttpTestingController;

  const mockFornecedores: Fornecedor[] = [
    { nome: 'Fornecedor 1', logo: '', estado: 'SP', custo_kWh: 0.5, limite_minimo_kWh: 10, numero_total_clientes: 100, avaliacao_media: 4.5 },
    { nome: 'Fornecedor 2', logo: '', estado: 'RJ', custo_kWh: 0.7, limite_minimo_kWh: 20, numero_total_clientes: 200, avaliacao_media: 4.0 },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FornecedorService]
    });

    service = TestBed.inject(FornecedorService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch and filter fornecedores by consumo', () => {
    const consumo = 15;
    service.get(consumo).subscribe(fornecedores => {
      expect(fornecedores.length).toBe(1);
      expect(fornecedores[0].nome).toBe('Fornecedor 2');
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/fornecedores`);
    expect(req.request.method).toBe('GET');
    req.flush(mockFornecedores);
  });

  it('should handle errors and return empty array', () => {
    const consumo = 15;
    service.get(consumo).subscribe(fornecedores => {
      expect(fornecedores.length).toBe(0);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/fornecedores`);
    req.flush('Error', { status: 500, statusText: 'Server Error' });
  });

  it('should update fornecedoresDisponiveis correctly', () => {
    const fornecedorList = [
      { nome: 'Fornecedor 1', logo: '', estado: 'SP', custo_kWh: 0.5, limite_minimo_kWh: 10, numero_total_clientes: 100, avaliacao_media: 4.5 }
    ];

    service.exibirValoresFornecedores(fornecedorList);

    service.valoresFornecedores$.subscribe(fornecedores => {
      expect(fornecedores.length).toBe(1);
      expect(fornecedores[0].nome).toBe('Fornecedor 1');
    });
  });
});
