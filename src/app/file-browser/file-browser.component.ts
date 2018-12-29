import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from './store';
import { TreeFileItem } from './models/tree-file-item.model';
import { FolderItem } from './models';

@Component({
  selector: 'app-file-browser',
  templateUrl: './file-browser.component.html',
  styleUrls: ['./file-browser.component.scss']
})
export class FileBrowserComponent implements OnInit {
  treeFiles$: Observable<TreeFileItem[]>;
  folders$: Observable<FolderItem[]>;

  constructor(private store: Store<fromStore.FileBrowserState>) { }

  ngOnInit() {
    this.treeFiles$ = this.store.select(fromStore.getAllTreeFiles);
    this.folders$ = this.store.select(fromStore.getAllFolders);

    this.store.dispatch(new fromStore.LoadTreeFile());
    this.store.dispatch(new fromStore.LoadFolders());
  }

}
