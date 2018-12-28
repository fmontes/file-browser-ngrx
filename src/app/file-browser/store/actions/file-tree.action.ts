import { Action } from '@ngrx/store';
import { FileTreeItem } from '../../models/file-tree-item.model';

// load files structure
export const LOAD_FILE_TREE = '[File Tree] Load File Tree';
export const LOAD_FILE_TREE_FAIL = '[File Tree] Load File Tree Fail';
export const LOAD_FILE_TREE_SUCCESS = '[File Tree] Load File Tree Success';

// define action creator
export class LoadFileTree implements Action {
  readonly type = LOAD_FILE_TREE;
}

export class LoadFileTreeFail implements Action {
  readonly type = LOAD_FILE_TREE_FAIL;

  constructor(public payload: any) {}
}

export class LoadFileTreeSuccess implements Action {
  readonly type = LOAD_FILE_TREE_SUCCESS;

  constructor(public payload: FileTreeItem[]) {}
}

// all the actions that FileTree could have
export type FileTreeAction = LoadFileTree | LoadFileTreeFail | LoadFileTreeSuccess;
