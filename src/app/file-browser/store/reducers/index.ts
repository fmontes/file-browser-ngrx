import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromFileTree from './file-tree.reducer';

export interface FileBrowserState {
  fileTree: fromFileTree.FileTreeItemState;
}

export const reducers: ActionReducerMap<FileBrowserState> = {
  fileTree: fromFileTree.reducer
};

/*
  Inside of store we have:

  state = {
    file-browser: {
      fileTree: {
        ...
      }
    }
  }
*/

// create base level of state object: 'file-browser'
export const getFileBrowserState = createFeatureSelector<FileBrowserState>('file-browser');

// get the state insitde the feature: file-browser
export const getFileTreeState = createSelector(
  getFileBrowserState,
  (state: FileBrowserState) => state.fileTree
);

// get the file trees from the state
export const getAllFileTrees = createSelector(
  getFileTreeState,
  fromFileTree.getFileTrees
);
export const getFileTreesLoading = createSelector(
  getFileTreeState,
  fromFileTree.getFileTreeLoading
);
export const getFileTreesLoaded = createSelector(
  getFileTreeState,
  fromFileTree.getFileTreeLoaded
);
