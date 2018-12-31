import { Action } from '@ngrx/store';
import { TreeItem } from '../../models/tree-item.model';

export enum TreeItemActionTypes {
  LOAD_TREE_ITEMS = '[FileBrowser] Load TreeItems',
  LOAD_TREE_ITEMS_SUCCESS = '[FileBrowser] Load TreeItems Success',
  LOAD_TREE_ITEMS_FAIL = '[FileBrowser] Load TreeItems Fail',
  CLEAR_TREE_ITEMS = '[FileBrowser] Clear TreeItems'
}

export class LoadTreeItems implements Action {
  readonly type = TreeItemActionTypes.LOAD_TREE_ITEMS;

  constructor(public payload?: string) {}
}

export class LoadTreeItemsSuccess implements Action {
  readonly type = TreeItemActionTypes.LOAD_TREE_ITEMS_SUCCESS;

  constructor(public payload: TreeItem[]) {}
}

export class LoadTreeItemsFail implements Action {
  readonly type = TreeItemActionTypes.LOAD_TREE_ITEMS_FAIL;

  constructor(public payload: any) {}
}

export class ClearTreeItems implements Action {
  readonly type = TreeItemActionTypes.CLEAR_TREE_ITEMS;

  constructor() {}
}


export type TreeItemActions =
  | LoadTreeItems
  | LoadTreeItemsSuccess
  | LoadTreeItemsFail
  | ClearTreeItems;
