import { Action } from '@ngrx/store';
import { FolderItem } from '../../models';

// load files structure
export const LOAD_FOLDERS = '[Folders] Load Folders';
export const LOAD_FOLDERS_FAIL = '[Folders] Load Folders Fail';
export const LOAD_FOLDERS_SUCCESS = '[Folders] Load Folders Success';

// define action creator
export class LoadFolders implements Action {
  readonly type = LOAD_FOLDERS;
}

export class LoadFoldersFail implements Action {
  readonly type = LOAD_FOLDERS_FAIL;

  constructor(public payload: any) {}
}

export class LoadFoldersSuccess implements Action {
  readonly type = LOAD_FOLDERS_SUCCESS;

  constructor(public payload: FolderItem[]) {}
}

export type FoldersAction = LoadFolders | LoadFoldersFail | LoadFoldersSuccess;
