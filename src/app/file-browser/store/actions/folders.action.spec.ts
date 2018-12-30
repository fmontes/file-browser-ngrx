import * as fromFolders from './folders.action';
import { TreeAssetType } from '../../models';

describe('Folders Actions', () => {
  describe('LoadFolders Actions', () => {
    describe('LoadFolders', () => {
      it('should create an action', () => {
        const action = new fromFolders.LoadFolders();

        expect({ ...action }).toEqual({
          type: fromFolders.LOAD_FOLDERS
        });
      });
    });

    describe('LoadFoldersFail', () => {
      it('should create an action', () => {
        const payload = { message: 'Load Error' };
        const action = new fromFolders.LoadFoldersFail(payload);

        expect({ ...action }).toEqual({
          type: fromFolders.LOAD_FOLDERS_FAIL,
          payload
        });
      });
    });

    describe('LoadFoldersSuccess', () => {
      it('should create an action', () => {
        const payload = [
          {
            identifier: '2e12010a-f61a-40df-82b9-8de5615fda6d',
            name: 'Magna',
            modDate: 'Tue Jun 23 1970 13:06:40 GMT+0000 (UTC)',
            title: 'consectetur exercitation ex',
            path: '/magna',
            type: TreeAssetType.FOLDER,
            showOnMenu: true
          },
          {
            identifier: 'c383b428-aab7-4642-99e5-528c32fd1db9',
            name: 'Culpa',
            modDate: 'Wed Jun 15 2011 08:34:35 GMT+0000 (UTC)',
            title: 'aliquip nulla adipisicing',
            path: '/culpa',
            type: TreeAssetType.FOLDER,
            showOnMenu: true
          }
        ];
        const action = new fromFolders.LoadFoldersSuccess(payload);

        expect({ ...action }).toEqual({
          type: fromFolders.LOAD_FOLDERS_SUCCESS,
          payload
        });
      });
    });
  });
});
