import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../_main/store';
import * as fromFeature from '../reducers';
import * as fromFileTree from '../reducers/file-tree.reducer';

import { FileTreeItem } from '../../models/file-tree-item.model';

/*
  state = {
    file-browser: {
      fileTree: {
        ...
      }
    }
  }
*/

// get the state inside the feature: file-browser
export const getFileTreeState = createSelector(
  fromFeature.getFileBrowserState,
  (state: fromFeature.FileBrowserState) => state.fileTree
);

// get the file trees from the state
export const getFileTreesEntities = createSelector(
  getFileTreeState,
  fromFileTree.getFileTreesEntities
);

export const getAllFileTrees = createSelector(
  getFileTreesEntities,
  (entities: {[id: string]: FileTreeItem}) => {
    return Object.keys(entities).map((id: string) => entities[id]);
  }
);

export const getFileTreesLoading = createSelector(
  getFileTreeState,
  fromFileTree.getFileTreeLoading
);

export const getFileTreesLoaded = createSelector(
  getFileTreeState,
  fromFileTree.getFileTreeLoaded
);
