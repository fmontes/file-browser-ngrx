import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from './store';
import { FileTreeItem } from './models/file-tree-item.model';

@Component({
  selector: 'app-file-browser',
  templateUrl: './file-browser.component.html',
  styleUrls: ['./file-browser.component.scss']
})
export class FileBrowserComponent implements OnInit {
  data$: Observable<FileTreeItem[]>;

  constructor(private store: Store<fromStore.FileBrowserState>) { }

  ngOnInit() {
    this.data$ = this.store.select(fromStore.getAllFileTrees);
  }

}
