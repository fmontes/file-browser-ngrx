import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromTreeItem from '../reducers/tree-item.reducer';

// get the state inside the feature: file-browser
export const getTreeItemState = createSelector(
  fromFeature.getFileBrowserState,
  (state: fromFeature.FileBrowserState) => state.items
);

export const getAllTreeItems = createSelector(
  getTreeItemState,
  fromTreeItem.selectAll
);

export const getTreeItemsLoaded = createSelector(
  getTreeItemState,
  fromTreeItem.getTreeItemsLoaded
);

export const getTreeItemsViewGrid = createSelector(
  getTreeItemState,
  fromTreeItem.getTreeItemsViewGrid
);



