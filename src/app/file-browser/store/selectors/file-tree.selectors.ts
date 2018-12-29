import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../_main/store';
import * as fromFeature from '../reducers';
import * as fromTreeFile from '../reducers/tree-file.reducer';

import { TreeFileItem } from '../../models';
import { RouterStateUrl } from '../../../_main/store';

/*
  state = {
    file-browser: {
      files: {
        ...
      }
    }
  }
*/

// get the state inside the feature: file-browser
export const getTreeFileState = createSelector(
  fromFeature.getFileBrowserState,
  (state: fromFeature.FileBrowserState) => state.files
);

// get the file trees from the state
export const getTreeFilesEntities = createSelector(
  getTreeFileState,
  fromTreeFile.getTreeFilesEntities
);

export const getAllTreeFiles = createSelector(
  getTreeFilesEntities,
  (entities: { [id: string]: TreeFileItem }) => {
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

export const getTreeFilesInPath = createSelector(
  getTreeFilesEntities,
  fromRoot.getRouterState,
  (entities, router): TreeFileItem[] => {
    const treeFiles: TreeFileItem[] = Object.keys(entities).map((id: string) => entities[id]);

    if (router.state.params.path) {
      return treeFiles.filter((item: TreeFileItem) => item.path.slice(1) === router.state.params.path);
    }
    return treeFiles;
  }
);
