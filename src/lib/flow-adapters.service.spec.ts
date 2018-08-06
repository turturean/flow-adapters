import { TestBed, inject } from '@angular/core/testing';

import { FlowAdaptersService } from './flow-adapters.service';

describe('FlowAdaptersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlowAdaptersService]
    });
  });

  it('should be created', inject([FlowAdaptersService], (service: FlowAdaptersService) => {
    expect(service).toBeTruthy();
  }));
});
