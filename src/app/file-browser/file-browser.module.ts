import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { FileBrowserRoutingModule } from './file-browser-routing.module';
import { FileBrowserComponent } from './file-browser.component';
import { FolderTreeModule } from './components/folder-tree/folder-tree.module';
import { FolderContentModule } from './components/folder-content/folder-content.module';
import { ViewModeSelectorModule } from './components/view-mode-selector/view-mode-selector.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';

import { reducers, effects } from './store';
import * as fromGuards from './guards';

@NgModule({
  declarations: [FileBrowserComponent],
  imports: [
    CommonModule,
    FolderTreeModule,
    FolderContentModule,
    ViewModeSelectorModule,
    MatToolbarModule,
    MatInputModule,
    FileBrowserRoutingModule,
    StoreModule.forFeature('file-browser', reducers),
    EffectsModule.forFeature(effects),
  ],
  providers: [fromGuards.TreeItemGuard, fromGuards.FoldersGuard]
})
export class FileBrowserModule {}
