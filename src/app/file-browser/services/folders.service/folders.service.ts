import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { FOLDERS } from 'src/data/db';
import { FolderItem } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class FoldersService {
  constructor() {}

  getItems(): Observable<FolderItem[]> {
    console.log(
      `%cAPI CALL: FoldersService.getItems: FolderItem[]`,
      'color: green; font-size: 1rem;'
    );
    return of(FOLDERS);
  }
}
