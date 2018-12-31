import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { tap, filter, take, switchMap, catchError } from 'rxjs/operators';

import { Store } from '@ngrx/store';

import * as fromStore from '../store';

@Injectable()
export class TreeItemGuard implements CanActivate {
  constructor(private store: Store<fromStore.FileBrowserState>) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    this.store.dispatch(new fromStore.ClearTreeItems());

    return this.checkStore(route.params.path || null).pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  checkStore(folder: string): Observable<boolean> {
    return this.store.select(fromStore.getTreeItemsLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromStore.LoadTreeItems(folder));
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }
}
