export enum TreeAssetType {
  FILE = 'file',
  FOLDER = 'folder'
}

export interface TreeAsset {
  identifier: string;
  modDate: string;
  name: string;
  path: string;
  title: string;
  type: TreeAssetType;
}
