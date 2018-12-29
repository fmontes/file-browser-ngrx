import { Action } from '@ngrx/store';
import { TreeFileItem } from '../../models';

// load files structure
export const LOAD_FILE_TREE = '[File Tree] Load File Tree';
export const LOAD_FILE_TREE_FAIL = '[File Tree] Load File Tree Fail';
export const LOAD_FILE_TREE_SUCCESS = '[File Tree] Load File Tree Success';

// define action creator
export class LoadTreeFile implements Action {
  readonly type = LOAD_FILE_TREE;
}

export class LoadTreeFileFail implements Action {
  readonly type = LOAD_FILE_TREE_FAIL;

  constructor(public payload: any) {}
}

export class LoadTreeFileSuccess implements Action {
  readonly type = LOAD_FILE_TREE_SUCCESS;

  constructor(public payload: TreeFileItem[]) {}
}

// all the actions that TreeFile could have
export type TreeFileAction = LoadTreeFile | LoadTreeFileFail | LoadTreeFileSuccess;
