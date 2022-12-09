import { TestBed } from '@angular/core/testing';

import { TestUiService } from './test-ui.service';

describe('TestUiService', () => {
  let service: TestUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
