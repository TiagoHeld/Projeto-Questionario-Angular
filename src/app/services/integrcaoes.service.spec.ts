import { TestBed } from '@angular/core/testing';

import { IntegracoesService } from './integracoes.service';

describe('IntegrcaoesService', () => {
  let service: IntegracoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntegracoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
