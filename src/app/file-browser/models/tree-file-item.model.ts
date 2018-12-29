import { TreeAsset } from './tree-asset.model';

export interface TreeFileItem extends TreeAsset {
  extension: string;
  fileSize: number;
}
