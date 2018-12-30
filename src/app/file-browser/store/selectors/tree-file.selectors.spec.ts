import { TestBed } from '@angular/core/testing';
import { StoreModule, Store, combineReducers } from '@ngrx/store';

import * as fromRoot from '../../../_main/store/reducers';
import * as fromReducers from '../reducers';
import * as fromActions from '../actions';
import * as fromSelectors from '../selectors/tree-file.selectors';

import { TreeFileItem, TreeAssetType } from '../../models';
import { StoreDevtools } from '@ngrx/store-devtools';

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
  [files[0].identifier]: files[0],
  [files[1].identifier]: files[1]
};

fdescribe('TreeFile Selectors', () => {
  let store: Store<fromReducers.FileBrowserState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          ...fromRoot.reducers,
          'file-browser': combineReducers(fromReducers.reducers)
        })
      ]
    });

    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
  });

  describe('getTreeFileEntities', () => {
    it('should return tree files as entities', () => {
      let result;

      store.select(fromSelectors.getTreeFilesEntities).subscribe(value => {
        result = value;
      });

      expect(result).toEqual({});

      store.dispatch(new fromActions.LoadTreeFileSuccess(files));

      expect(result).toEqual(entities);
    });
  });

  describe('getTreeFileLoading', () => {
    it('should return loading', () => {
      let result;

      store.select(fromSelectors.getTreeFilesLoading).subscribe(value => {
        result = value;
      });

      expect(result).toEqual(false);

      store.dispatch(new fromActions.LoadTreeFile());

      expect(result).toEqual(true);
    });
  });
});
