import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';

import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as foldersActions from '../actions';
import * as fromServices from '../../services';
import { FolderItem } from '../../models';

@Injectable()
export class FoldersEffects {
  constructor(
    private actions$: Actions,
    private foldersService: fromServices.FoldersService
  ) {}

  @Effect()
  loadTreeFile$ = this.actions$.pipe(
    ofType(foldersActions.LOAD_FOLDERS),
    switchMap(() => {
      return this.foldersService.getItems().pipe(
        map((files: FolderItem[]) => new foldersActions.LoadFoldersSuccess(files)),
        catchError(error => of(new foldersActions.LoadFoldersFail(error)))
      );
    })
  );
}
