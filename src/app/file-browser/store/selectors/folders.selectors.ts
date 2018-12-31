import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromFolders from '../reducers/folders.reducer';

// get the state inside the feature: file-browser
export const getFoldersState = createSelector(
  fromFeature.getFileBrowserState,
  (state: fromFeature.FileBrowserState) => state.folders
);

// get the file trees from the state
export const getFoldersEntities = createSelector(
  getFoldersState,
  fromFolders.selectEntities
);

export const getAllFolders = createSelector(
  getFoldersState,
  fromFolders.selectAll
);

export const getFoldersLoading = createSelector(
  getFoldersState,
  fromFolders.getFoldersLoading
);

export const getFoldersLoaded = createSelector(
  getFoldersState,
  fromFolders.getFoldersLoaded
);
