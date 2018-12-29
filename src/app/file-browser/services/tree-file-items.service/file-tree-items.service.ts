import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TreeFileItem } from '../../models';
import { FILES } from 'src/data/db';

@Injectable({
  providedIn: 'root'
})
export class TreeFileItemsService {

  constructor() { }

  getItems(path: string = '/'): Observable<TreeFileItem[]> {
    // return of(FILES.filter((files: TreeFileItem) => files.path === path));
    return of(FILES);
  }
}
