import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';

import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as treeFileActions from '../actions';
import * as fromServices from '../../services';
import { TreeFileItem } from '../../models/tree-file-item.model';

@Injectable()
export class TreeFileEffects {
  constructor(
    private actions$: Actions,
    private treeFileItemService: fromServices.TreeFileItemsService
  ) {}

  @Effect()
  loadTreeFile$ = this.actions$.pipe(
    ofType(treeFileActions.LOAD_FILE_TREE),
    switchMap((action: treeFileActions.LoadTreeFile) => {
      return this.treeFileItemService.getItems(`/${action.payload || ''}`).pipe(
        map((files: TreeFileItem[]) => new treeFileActions.LoadTreeFileSuccess(files)),
        catchError(error => of(new treeFileActions.LoadTreeFileFail(error)))
      );
    })
  );
}
