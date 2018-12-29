import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromFolders from '../reducers/folders.reducer';

import { FolderItem } from '../../models';


// get the state inside the feature: file-browser
export const getFoldersState = createSelector(
  fromFeature.getFileBrowserState,
  (state: fromFeature.FileBrowserState) => state.folders
);

// get the file trees from the state
export const getFoldersEntities = createSelector(
  getFoldersState,
  fromFolders.getFoldersEntities
);

export const getAllFolders = createSelector(
  getFoldersEntities,
  (entities: {[id: string]: FolderItem}) => {
    return Object.keys(entities).map((id: string) => entities[id]);
  }
);

export const getFolderssLoading = createSelector(
  getFoldersState,
  fromFolders.getFoldersLoading
);

export const getFolderssLoaded = createSelector(
  getFoldersState,
  fromFolders.getFoldersLoaded
);
