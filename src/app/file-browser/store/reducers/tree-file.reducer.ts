import * as fromTreeFile from '../actions/tree-file.action';
import { TreeFileItem } from '../../models/tree-file-item.model';

// Represent a section of the full state
export interface TreeFileItemState {
  entities: { [id: string]: TreeFileItem };
  loaded: boolean;
  loading: boolean;
}

export const initialState: TreeFileItemState = {
  entities: {},
  loaded: false,
  loading: false
};

export function reducer(state = initialState, action: fromTreeFile.TreeFileAction): TreeFileItemState {
  switch (action.type) {
    case fromTreeFile.LOAD_FILE_TREE: {
      return {
        ...state,
        loading: true
      };
    }

    case fromTreeFile.LOAD_FILE_TREE_SUCCESS: {
      const treeFileItems = action.payload;

      const entities = treeFileItems.reduce(
        (items: { [id: string]: TreeFileItem }, treeFileItem: TreeFileItem) => {
          return {
            ...items,
            [treeFileItem.identifier]: treeFileItem
          };
        },
        {
          ...state.entities
        }
      );

      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      };
    }

    case fromTreeFile.LOAD_FILE_TREE_FAIL: {
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
export const getTreeFileLoading = (state: TreeFileItemState) => state.loading;
export const getTreeFileLoaded = (state: TreeFileItemState) => state.loaded;
export const getTreeFilesEntities = (state: TreeFileItemState) => state.entities;
