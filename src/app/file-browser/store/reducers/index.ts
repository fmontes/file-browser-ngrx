import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromFolders from './folders.reducer';
import * as fromTreeItem from './tree-item.reducer';

export interface FileBrowserState {
  folders: fromFolders.FolderItemState;
  items: fromTreeItem.TreeItemState;
}

export const reducers: ActionReducerMap<FileBrowserState> = {
  folders: fromFolders.reducer,
  items: fromTreeItem.reducer,
};

// create base level of state object: 'file-browser'
export const getFileBrowserState = createFeatureSelector<FileBrowserState>('file-browser');
