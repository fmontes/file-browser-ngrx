import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';

import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as treeItemActions from '../actions';
import * as fromServices from '../../services';
import { TreeItem } from '../../models';

@Injectable()
export class TreeItemEffects {
  constructor(private actions$: Actions, private treeItemService: fromServices.TreeItemService) {}

  @Effect()
  loadTreeItems$ = this.actions$.pipe(
    ofType(treeItemActions.TreeItemActionTypes.LOAD_TREE_ITEMS),
    switchMap((action: treeItemActions.LoadTreeItems) => {
      return this.treeItemService.getTreeItems(`/${action.payload || ''}`).pipe(
        map(
          (files: TreeItem[]) =>
            new treeItemActions.LoadTreeItemsSuccess(files)
        ),
        catchError(error => of(new treeItemActions.LoadTreeItemsFail(error)))
      );
    })
  );
}
