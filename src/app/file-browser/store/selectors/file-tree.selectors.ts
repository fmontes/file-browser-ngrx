import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromTreeFile from '../reducers/tree-file.reducer';

import { TreeFileItem } from '../../models/tree-file-item.model';

/*
  state = {
    file-browser: {
      treeFile: {
        ...
      }
    }
  }
*/

// get the state inside the feature: file-browser
export const getTreeFileState = createSelector(
  fromFeature.getFileBrowserState,
  (state: fromFeature.FileBrowserState) => state.treeFile
);

// get the file trees from the state
export const getTreeFilesEntities = createSelector(
  getTreeFileState,
  fromTreeFile.getTreeFilesEntities
);

export const getAllTreeFiles = createSelector(
  getTreeFilesEntities,
  (entities: {[id: string]: TreeFileItem}) => {
    return Object.keys(entities).map((id: string) => entities[id]);
  }
);

export const getTreeFilesLoading = createSelector(
  getTreeFileState,
  fromTreeFile.getTreeFileLoading
);

export const getTreeFilesLoaded = createSelector(
  getTreeFileState,
  fromTreeFile.getTreeFileLoaded
);
