import { TestBed } from '@angular/core/testing';

import { ProductBrandService } from './product-brand.service';

describe('ProductBrandService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductBrandService = TestBed.get(ProductBrandService);
    expect(service).toBeTruthy();
  });
});
