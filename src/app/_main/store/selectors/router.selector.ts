import { createSelector } from '@ngrx/store';

import * as fromRoot from '../reducers';
import { RouterReducerState } from '@ngrx/router-store';
import { Params } from '@angular/router';

// get the state inside the feature: routerReducer
export const getRouterStateUrl = createSelector(
  fromRoot.getRouterState,
  (routerStateUrl: RouterReducerState<fromRoot.RouterStateUrl>) => routerStateUrl.state
);

export const getRouterParams = createSelector(
  getRouterStateUrl,
  (routerStateUrl: fromRoot.RouterStateUrl) => routerStateUrl.params
);

export const getRouterPath = createSelector(
  getRouterParams,
  (params: Params) => params.path
);
