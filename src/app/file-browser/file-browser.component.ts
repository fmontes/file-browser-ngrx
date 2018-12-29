import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromRoot from '../_main/store';
import * as fromStore from './store';
import { TreeFileItem } from './models/tree-file-item.model';
import { FolderItem } from './models';
import { RouterReducerState } from '@ngrx/router-store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-file-browser',
  templateUrl: './file-browser.component.html',
  styleUrls: ['./file-browser.component.scss']
})
export class FileBrowserComponent implements OnInit {
  treeFiles$: Observable<TreeFileItem[]>;
  folders$: Observable<FolderItem[]>;
  folderActive$: Observable<string>;

  constructor(private store: Store<fromStore.FileBrowserState>) {}

  ngOnInit() {
    this.treeFiles$ = this.store.select(fromStore.getAllTreeFiles);
    this.folders$ = this.store.select(fromStore.getAllFolders);
    this.folderActive$ = this.store.select(fromRoot.getRouterPath);
  }

  onSelectedFolder(event: FolderItem): void {
    this.store.dispatch(
      new fromRoot.Go({
        path: ['file-browser', event.path.slice(1)]
      })
    );
  }
}
