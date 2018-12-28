import * as fromFileTree from '../actions/file-tree.action';
import { FileTreeItem } from '../../models/file-tree-item.model';

// Represent a section of the full state
export interface FileTreeItemState {
  data: FileTreeItem[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: FileTreeItemState = {
  data: [
    {
      identifier: 'ddc3b60a-df3d-4554-a0f3-90f3c7c276b8',
      fileName: 'sit',
      extension: 'docx',
      modDate: 'Fri Oct 11 2013 22:16:36 GMT+0000 (UTC)',
      title: 'cillum incididunt cupidatat',
      fileSize: 2422,
      path: ''
    }
  ],
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromFileTree.FileTreeAction
): FileTreeItemState {

  switch (action.type) {
    case fromFileTree.LOAD_FILE_TREE: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromFileTree.LOAD_FILE_TREE_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true
      };
    }

    case fromFileTree.LOAD_FILE_TREE_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }

  return state;
}

// selector functions
export const getFileTreeLoading = (state: FileTreeItemState) => state.loading;
export const getFileTreeLoaded = (state: FileTreeItemState) => state.loaded;
export const getFileTrees = (state: FileTreeItemState) => state.data;
