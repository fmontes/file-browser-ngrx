import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { tap, filter, take, switchMap, catchError } from 'rxjs/operators';

import { Store } from '@ngrx/store';

import * as fromStore from '../store';

@Injectable()
export class TreeFileGuard implements CanActivate {
  constructor(private store: Store<fromStore.FileBrowserState>) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    this.store.dispatch(new fromStore.ClearTreeFile());

    return this.checkStore(route.params.path || null).pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }

  checkStore(folder: string): Observable<boolean> {
    return this.store.select(fromStore.getTreeFilesLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromStore.LoadTreeFile(folder));
        }
      }),
      filter(loaded => loaded),
      take(1)
    );
  }
}
