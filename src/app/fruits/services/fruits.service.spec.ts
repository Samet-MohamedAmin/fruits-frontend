/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FruitsService } from './fruits.service';

describe('Service: Fruits', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FruitsService]
    });
  });

  it('should ...', inject([FruitsService], (service: FruitsService) => {
    expect(service).toBeTruthy();
  }));
});
