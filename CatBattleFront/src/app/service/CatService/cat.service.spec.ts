import { TestBed, inject } from '@angular/core/testing';

import { CatListService } from './cat-list.service';

describe('CatListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatListService]
    });
  });

  it('should be created', inject([CatListService], (service: CatListService) => {
    expect(service).toBeTruthy();
  }));
});
