import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TreeFileItem } from '../../models';
import { FILES } from 'src/data/db';

@Injectable({
  providedIn: 'root'
})
export class TreeFileItemsService {

  constructor() { }

  getItems(): Observable<TreeFileItem[]> {
    return of(FILES);
  }
}
