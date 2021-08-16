import { TestBed } from '@angular/core/testing';
import { CalculationService } from './calculation.service';

describe('StepService', () => {
  let service: CalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
