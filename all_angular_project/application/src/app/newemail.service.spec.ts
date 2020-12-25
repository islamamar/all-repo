import { TestBed } from '@angular/core/testing';

import { NewemailService } from './newemail.service';

describe('NewemailService', () => {
  let service: NewemailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewemailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
