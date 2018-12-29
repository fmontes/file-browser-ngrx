/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TreeFileItemsService } from './file-tree-items.service';

describe('Service: TreeFileItems', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TreeFileItemsService]
    });
  });

  it('should ...', inject([TreeFileItemsService], (service: TreeFileItemsService) => {
    expect(service).toBeTruthy();
  }));
});
