import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';

import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as foldersActions from '../actions';
import * as fromServices from '../../services';
import { TreeItem } from '../../models';

@Injectable()
export class FoldersEffects {
  constructor(
    private actions$: Actions,
    private foldersService: fromServices.FoldersService
  ) {}

  @Effect()
  loadTreeFile$ = this.actions$.pipe(
    ofType(foldersActions.FolderActionTypes.LOAD_FOLDERS),
    switchMap(() => {
      return this.foldersService.getRootFolders().pipe(
        map((files: TreeItem[]) => new foldersActions.LoadFoldersSuccess(files)),
        catchError(error => of(new foldersActions.LoadFoldersFail(error)))
      );
    })
  );
}
