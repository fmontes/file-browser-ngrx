import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';

import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as fileTreeActions from '../actions';
import * as fromServices from '../../services';
import { FileTreeItem } from '../../models/file-tree-item.model';

@Injectable()
export class FileTreeEffects {
  constructor(
    private actions$: Actions,
    private fileTreeItemService: fromServices.FileTreeItemsService
  ) {}

  @Effect()
  loadFileTree$ = this.actions$.pipe(
    ofType(fileTreeActions.LOAD_FILE_TREE),
    switchMap(() => {
      return this.fileTreeItemService.getItems().pipe(
        map((files: FileTreeItem[]) => new fileTreeActions.LoadFileTreeSuccess(files)),
        catchError(error => of(new fileTreeActions.LoadFileTreeFail(error)))
      );
    })
  );
}
