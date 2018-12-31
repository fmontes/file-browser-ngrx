import * as fromTreeFile from './tree-item.reducer';
import * as fromActions from '../actions/tree-item.action';
import { TreeItem } from '../../models';
import { ITEMS } from 'src/data/db';

const files: TreeItem[] = [{...ITEMS[0]}, {...ITEMS[1]}];

const entities = {
  '0f38f1b6-f851-40ea-92db-18c41e3d9490': files[0],
  '6fddef84-b9cb-4ce6-a12b-272490e124bb': files[1]
};

describe('TreeItemReducer', () => {
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
      const action = new fromActions.LoadTreeItems();
      const state = fromTreeFile.reducer(initialState, action);

      expect(state.entities).toEqual({});
      expect(state.loaded).toEqual(false);
      expect(state.loading).toEqual(true);
    });
  });

  describe('LOAD_TREE_FILE_SUCCESS action', () => {
    it('should set loading to true', () => {
      const { initialState } = fromTreeFile;
      const action = new fromActions.LoadTreeItemsSuccess(files);
      const state = fromTreeFile.reducer(initialState, action);

      expect(state.entities).toEqual(entities);
      expect(state.loaded).toEqual(true);
      expect(state.loading).toEqual(false);
    });
  });
});

describe('TreeItemReducer Selectors', () => {
  describe('getTreeFilesEntities', () => {
    it('should return .entities', () => {
      const { initialState } = fromTreeFile;
      const previousState = { ...initialState, entities };
      const slice = fromTreeFile.getTreeItemsEntities(previousState);

      expect(slice).toEqual(entities);
    });
  });

  describe('getTreeFilesLoading', () => {
    it('should return .loading', () => {
      const { initialState } = fromTreeFile;
      const previousState = { ...initialState, loading: true };
      const slice = fromTreeFile.getTreeItemsLoading(previousState);

      expect(slice).toEqual(true);
    });
  });

  describe('getTreeFilesLoaded', () => {
    it('should return .loaded', () => {
      const { initialState } = fromTreeFile;
      const previousState = { ...initialState, loaded: true };
      const slice = fromTreeFile.getTreeItemsLoaded(previousState);

      expect(slice).toEqual(true);
    });
  });


});
