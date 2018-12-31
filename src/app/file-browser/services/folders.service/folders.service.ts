import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { ITEMS } from 'src/data/db';
import { TreeItem, TreeItemType } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class FoldersService {
  constructor() {}

  getRootFolders(): Observable<TreeItem[]> {
    console.log(
      `%cAPI CALL: FoldersService.getRootFolders: TreeItem[]`,
      'color: green; font-size: 1rem;'
    );
    return of(ITEMS.filter((item: TreeItem) => item.type === TreeItemType.FOLDER && item.path === '/'));
  }
}
