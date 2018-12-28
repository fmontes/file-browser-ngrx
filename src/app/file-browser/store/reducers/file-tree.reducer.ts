import * as fromFileTree from '../actions/file-tree.action';
import { FileTreeItem } from '../../models/file-tree-item.model';

// Represent a section of the full state
export interface FileTreeItemState {
  data: FileTreeItem[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: FileTreeItemState = {
  data: [],
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
      const data = action.payload;

      return {
        ...state,
        loading: false,
        loaded: true,
        data
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
