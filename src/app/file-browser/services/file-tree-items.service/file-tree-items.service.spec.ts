/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FileTreeItemsService } from './file-tree-items.service';

describe('Service: FileTreeItems', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileTreeItemsService]
    });
  });

  it('should ...', inject([FileTreeItemsService], (service: FileTreeItemsService) => {
    expect(service).toBeTruthy();
  }));
});
