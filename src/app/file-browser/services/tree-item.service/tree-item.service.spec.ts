/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TreeItemService } from './tree-item.service';

describe('Service: TreeItem', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TreeItemService]
    });
  });

  it('should ...', inject([TreeItemService], (service: TreeItemService) => {
    expect(service).toBeTruthy();
  }));
});
