import { TreeItem } from '../../models';
import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { FolderActionTypes, FoldersAction } from '../actions';

// Represent a section of the full state

export interface FolderItemState extends EntityState<TreeItem> {
  loading: boolean;
  loaded: boolean;
}

export const adapter: EntityAdapter<TreeItem> = createEntityAdapter<TreeItem>(
  {
    selectId: (item: TreeItem) => item.identifier
  }
);

export const initialState: FolderItemState = adapter.getInitialState({
  loading: false,
  loaded: false
});

export function reducer(state = initialState, action: FoldersAction): FolderItemState {
  switch (action.type) {
    case FolderActionTypes.LOAD_FOLDERS: {
      return {
        ...state,
        loading: true
      };
    }

    case FolderActionTypes.LOAD_FOLDERS_SUCCESS: {
      return adapter.addMany(action.payload, {
        ...state,
        loaded: true,
        loading: false
      });
    }

    case FolderActionTypes.LOAD_FOLDERS_FAIL: {
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
export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const getFoldersLoading = (state: FolderItemState) => state.loading;
export const getFoldersLoaded = (state: FolderItemState) => state.loaded;
