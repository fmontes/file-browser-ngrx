import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { FileBrowserRoutingModule } from './file-browser-routing.module';
import { FileBrowserComponent } from './file-browser.component';
import { FolderTreeModule } from './components/folder-tree/folder-tree.module';
import { FolderContentModule } from './components/folder-content/folder-content.module';

import { reducers } from './store';
@NgModule({
  declarations: [FileBrowserComponent],
  imports: [
    CommonModule,
    FolderTreeModule,
    FolderContentModule,
    FileBrowserRoutingModule,
    StoreModule.forFeature('file-browser', reducers)
  ]
})
export class FileBrowserModule { }
