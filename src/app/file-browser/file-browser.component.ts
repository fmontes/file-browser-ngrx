import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromRoot from '../_main/store';
import * as fromStore from './store';
import { TreeItem } from './models';


@Component({
  selector: 'app-file-browser',
  templateUrl: './file-browser.component.html',
  styleUrls: ['./file-browser.component.scss']
})
export class FileBrowserComponent implements OnInit {
  treeFiles$: Observable<TreeItem[]>;
  folders$: Observable<TreeItem[]>;
  folderActive$: Observable<string>;

  constructor(private store: Store<fromStore.FileBrowserState>) {}

  ngOnInit() {
    this.treeFiles$ = this.store.select(fromStore.getAllTreeItems);
    this.folders$ = this.store.select(fromStore.getAllFolders);
    this.folderActive$ = this.store.select(fromRoot.getRouterPath);
  }

  onSelectedFolder(event: TreeItem): void {
    this.store.dispatch(
      new fromRoot.Go({
        path: ['file-browser', event.name]
      })
    );
  }
}
