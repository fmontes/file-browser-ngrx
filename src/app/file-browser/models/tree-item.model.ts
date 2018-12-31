export enum TreeItemType {
  FILE = 'file',
  FOLDER = 'folder'
}

export interface TreeItem {
  extension?: string;
  fileSize?: number;
  identifier: string;
  modDate: string;
  name: string;
  path: string;
  title: string;
  type: TreeItemType;
  url?: string;
}
