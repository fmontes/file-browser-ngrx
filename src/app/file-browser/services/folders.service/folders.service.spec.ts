/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FoldersService } from './folders.service';

describe('Service: Folders', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FoldersService]
    });
  });

  it('should ...', inject([FoldersService], (service: FoldersService) => {
    expect(service).toBeTruthy();
  }));
});
