import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


import { FileBrowserRoutingModule } from './file-browser-routing.module';
import { FileBrowserComponent } from './file-browser.component';
import { FolderTreeModule } from './components/folder-tree/folder-tree.module';
import { FolderContentModule } from './components/folder-content/folder-content.module';

import { reducers, effects } from './store';
@NgModule({
  declarations: [FileBrowserComponent],
  imports: [
    CommonModule,
    FolderTreeModule,
    FolderContentModule,
    FileBrowserRoutingModule,
    StoreModule.forFeature('file-browser', reducers),
    EffectsModule.forFeature(effects)
  ]
})
export class FileBrowserModule { }
