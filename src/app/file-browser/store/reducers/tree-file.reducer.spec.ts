import * as fromTreeFile from './tree-file.reducer';
import * as fromActions from '../actions/tree-file.action';
import { TreeFileItem, TreeAssetType } from '../../models';

const files: TreeFileItem[] = [
  {
    identifier: '0f38f1b6-f851-40ea-92db-18c41e3d9490',
    name: 'ullamco',
    extension: 'html',
    modDate: 'Thu May 17 1990 01:20:42 GMT+0000 (UTC)',
    title: 'labore nisi pariatur',
    fileSize: 3638,
    path: '/',
    type: TreeAssetType.FILE
  },
  {
    identifier: '6fddef84-b9cb-4ce6-a12b-272490e124bb',
    name: 'adipisicing',
    extension: 'jpg',
    modDate: 'Fri Jun 04 2004 00:59:49 GMT+0000 (UTC)',
    title: 'do tempor id',
    fileSize: 2214,
    path: '/',
    type: TreeAssetType.FILE
  }
];

const entities = {
  '0f38f1b6-f851-40ea-92db-18c41e3d9490': files[0],
  '6fddef84-b9cb-4ce6-a12b-272490e124bb': files[1]
};

describe('TreeFileReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const { initialState } = fromTreeFile;
      const action = {} as any;
      const state = fromTreeFile.reducer(undefined, action);

      expect(state).toBe(initialState);
    });
  });

  describe('LOAD_TREE_FILE action', () => {
    it('should set loading to true', () => {
      const { initialState } = fromTreeFile;
      const action = new fromActions.LoadTreeFile();
      const state = fromTreeFile.reducer(initialState, action);

      expect(state.entities).toEqual({});
      expect(state.loaded).toEqual(false);
      expect(state.loading).toEqual(true);
    });
  });

  describe('LOAD_TREE_FILE_SUCCESS action', () => {
    it('should set loading to true', () => {
      const { initialState } = fromTreeFile;
      const action = new fromActions.LoadTreeFileSuccess(files);
      const state = fromTreeFile.reducer(initialState, action);

      expect(state.entities).toEqual(entities);
      expect(state.loaded).toEqual(true);
      expect(state.loading).toEqual(false);
    });
  });
});

describe('TreeFileReducer Selectors', () => {
  describe('getTreeFilesEntities', () => {
    it('should return .entities', () => {
      const { initialState } = fromTreeFile;
      const previousState = { ...initialState, entities };
      const slice = fromTreeFile.getTreeFilesEntities(previousState);

      expect(slice).toEqual(entities);
    });
  });

  describe('getTreeFilesLoading', () => {
    it('should return .loading', () => {
      const { initialState } = fromTreeFile;
      const previousState = { ...initialState, loading: true };
      const slice = fromTreeFile.getTreeFileLoading(previousState);

      expect(slice).toEqual(true);
    });
  });

  describe('getTreeFilesLoaded', () => {
    it('should return .loaded', () => {
      const { initialState } = fromTreeFile;
      const previousState = { ...initialState, loaded: true };
      const slice = fromTreeFile.getTreeFileLoaded(previousState);

      expect(slice).toEqual(true);
    });
  });


});
