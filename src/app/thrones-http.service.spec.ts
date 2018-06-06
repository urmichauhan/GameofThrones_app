import { TestBed, inject } from '@angular/core/testing';

import { ThronesHttpService } from './thrones-http.service';

describe('ThronesHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThronesHttpService]
    });
  });

  it('should be created', inject([ThronesHttpService], (service: ThronesHttpService) => {
    expect(service).toBeTruthy();
  }));
});
