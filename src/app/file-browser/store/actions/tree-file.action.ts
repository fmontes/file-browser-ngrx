import { Action } from '@ngrx/store';
import { TreeFileItem } from '../../models';

// load files structure
export const LOAD_FILE_TREE = '[File Browser] Load File Tree';
export const LOAD_FILE_TREE_FAIL = '[File Browser] Load File Tree Fail';
export const LOAD_FILE_TREE_SUCCESS = '[File Browser] Load File Tree Success';
export const CLEAR_FILE_TREE = '[File Browser] Clear File Tree';

// define action creator
export class LoadTreeFile implements Action {
  readonly type = LOAD_FILE_TREE;

  constructor(public payload?: any) {}
}

export class LoadTreeFileFail implements Action {
  readonly type = LOAD_FILE_TREE_FAIL;

  constructor(public payload: any) {}
}

export class LoadTreeFileSuccess implements Action {
  readonly type = LOAD_FILE_TREE_SUCCESS;

  constructor(public payload: TreeFileItem[]) {}
}

export class ClearTreeFile implements Action {
  readonly type = CLEAR_FILE_TREE;

  constructor() {}
}


// all the actions that TreeFile could have
export type TreeFileAction = LoadTreeFile | LoadTreeFileFail | LoadTreeFileSuccess | ClearTreeFile;
