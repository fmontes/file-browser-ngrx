import * as fromFolders from '../actions/folders.action';
import { FolderItem } from '../../models';

// Represent a section of the full state
export interface FolderItemState {
  entities: { [id: string]: FolderItem };
  loaded: boolean;
  loading: boolean;
}

export const initialState: FolderItemState = {
  entities: {},
  loaded: false,
  loading: false
};

export function reducer(state = initialState, action: fromFolders.FoldersAction): FolderItemState {
  switch (action.type) {
    case fromFolders.LOAD_FOLDERS: {
      return {
        ...state,
        loading: true
      };
    }

    case fromFolders.LOAD_FOLDERS_SUCCESS: {
      const treeFileItems = action.payload;

      const entities = treeFileItems.reduce(
        (items: { [id: string]: FolderItem }, treeFileItem: FolderItem) => {
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

    case fromFolders.LOAD_FOLDERS_FAIL: {
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
export const getFoldersLoading = (state: FolderItemState) => state.loading;
export const getFoldersLoaded = (state: FolderItemState) => state.loaded;
export const getFoldersEntities = (state: FolderItemState) => state.entities;
