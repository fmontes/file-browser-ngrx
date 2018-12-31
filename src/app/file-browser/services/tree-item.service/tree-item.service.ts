import { Injectable } from '@angular/core';
import { TreeItem, TreeItemType } from '../../models';
import { Observable, of } from 'rxjs';
import { ITEMS } from 'src/data/db';

@Injectable({
  providedIn: 'root'
})
export class TreeItemService {
  constructor() {}

  getTreeItems(path: string = '/'): Observable<TreeItem[]> {
    console.log(
      `%cAPI CALL: TreeItemService.getTreeItems with path ${path}: TreeItem[]`,
      'color: blue; font-size: 1rem;'
    );
    return of(ITEMS.filter((file: TreeItem) => file.path === path));
  }
}
