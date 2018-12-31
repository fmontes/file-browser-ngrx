import { Action } from '@ngrx/store';
import { TreeItem } from '../../models';

export enum FolderActionTypes {
  LOAD_FOLDERS = '[File Browser] Load Folders',
  LOAD_FOLDERS_FAIL = '[File Browser] Load Folders Fail',
  LOAD_FOLDERS_SUCCESS = '[File Browser] Load Folders Success'
}


// define action creator
export class LoadFolders implements Action {
  readonly type = FolderActionTypes.LOAD_FOLDERS;
}

export class LoadFoldersFail implements Action {
  readonly type = FolderActionTypes.LOAD_FOLDERS_FAIL;

  constructor(public payload: any) {}
}

export class LoadFoldersSuccess implements Action {
  readonly type = FolderActionTypes.LOAD_FOLDERS_SUCCESS;

  constructor(public payload: TreeItem[]) {}
}

export type FoldersAction = LoadFolders | LoadFoldersFail | LoadFoldersSuccess;
