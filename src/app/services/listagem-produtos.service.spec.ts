import { TestBed } from '@angular/core/testing';

import { ListagemProdutosService } from './listagem-produtos.service';

describe('ListagemProdutosService', () => {
  let service: ListagemProdutosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListagemProdutosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
