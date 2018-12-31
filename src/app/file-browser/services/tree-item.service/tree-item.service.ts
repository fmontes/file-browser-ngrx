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
    return of(this.getFiles(ITEMS).filter((file: TreeItem) => file.path === path));
  }

  getRooFolders(): Observable<TreeItem[]> {
    console.log(
      `%cAPI CALL: TreeItemService.getRooFolders: TreeItem[]`,
      'color: green; font-size: 1rem;'
    );
    return of(this.getFolders(ITEMS).filter((file: TreeItem) => file.path === '/'));
  }

  private getFiles(items: TreeItem[]): TreeItem[] {
    return items.filter((item: TreeItem) => item.type === TreeItemType.FILE);
  }

  private getFolders(items: TreeItem[]): TreeItem[] {
    return items.filter((item: TreeItem) => item.type === TreeItemType.FOLDER);
  }
}
