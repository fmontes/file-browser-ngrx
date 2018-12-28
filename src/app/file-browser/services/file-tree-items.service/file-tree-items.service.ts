import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FileTreeItem } from '../../models/file-tree-item.model';
import { ELEMENT_DATA } from 'src/data/db';

@Injectable({
  providedIn: 'root'
})
export class FileTreeItemsService {

  constructor() { }

  getItems(): Observable<FileTreeItem[]> {
    return of(ELEMENT_DATA);
  }
}
