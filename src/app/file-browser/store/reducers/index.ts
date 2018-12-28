import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromFileTree from './file-tree.reducer';

export interface FileBrowserState {
  fileTree: fromFileTree.FileTreeItemState;
}

export const reducers: ActionReducerMap<FileBrowserState> = {
  fileTree: fromFileTree.reducer
};

// create base level of state object: 'file-browser'
export const getFileBrowserState = createFeatureSelector<FileBrowserState>('file-browser');
