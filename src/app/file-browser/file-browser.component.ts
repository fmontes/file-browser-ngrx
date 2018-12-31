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
  treeItems$: Observable<TreeItem[]>;
  folders$: Observable<TreeItem[]>;
  folderActive$: Observable<string>;
  viewGrid$: Observable<boolean>;

  constructor(private store: Store<fromStore.FileBrowserState>) {}

  ngOnInit() {
    this.treeItems$ = this.store.select(fromStore.getAllTreeItems);
    this.folders$ = this.store.select(fromStore.getAllFolders);
    this.viewGrid$ = this.store.select(fromStore.getTreeItemsViewGrid);
    this.folderActive$ = this.store.select(fromRoot.getRouterPath);
  }

  onSelectedFolder(event: TreeItem): void {
    this.store.dispatch(
      new fromRoot.Go({
        path: ['file-browser', event.name]
      })
    );
  }

  onSelectView(event: string): void {
    this.store.dispatch(
      new fromStore.ToggleViewTreeItems()
    );
  }
}
