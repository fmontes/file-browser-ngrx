import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromTreeFile from './tree-file.reducer';
import * as fromFolders from './folders.reducer';

export interface FileBrowserState {
  files: fromTreeFile.TreeFileItemState;
  folders: fromFolders.FolderItemState;
}

export const reducers: ActionReducerMap<FileBrowserState> = {
  files: fromTreeFile.reducer,
  folders: fromFolders.reducer
};

// create base level of state object: 'file-browser'
export const getFileBrowserState = createFeatureSelector<FileBrowserState>('file-browser');
