import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { TreeItem } from '../../models/tree-item.model';
import { TreeItemActions, TreeItemActionTypes } from '../actions/tree-item.action';

export interface TreeItemState extends EntityState<TreeItem> {
  loading: boolean;
  loaded: boolean;
}

export const adapter: EntityAdapter<TreeItem> = createEntityAdapter<TreeItem>(
  {
    selectId: (item: TreeItem) => item.identifier
  }
);

export const initialState: TreeItemState = adapter.getInitialState({
  loading: false,
  loaded: false
});

export function reducer(
  state = initialState,
  action: TreeItemActions
): TreeItemState {
  switch (action.type) {
    case TreeItemActionTypes.LOAD_TREE_ITEMS: {
      return {
        ...state,
        loading: true
      };
    }

    case TreeItemActionTypes.LOAD_TREE_ITEMS_SUCCESS: {
      return adapter.addMany(action.payload, {
        ...state,
        loaded: true,
        loading: false
      });
    }

    case TreeItemActionTypes.LOAD_TREE_ITEMS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }

    case TreeItemActionTypes.CLEAR_TREE_ITEMS: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const getTreeItemsLoaded = (state: TreeItemState) => state.loaded;
export const getTreeItemsLoading = (state: TreeItemState) => state.loading;
export const getTreeItemsEntities = (state: TreeItemState) => state.entities;
