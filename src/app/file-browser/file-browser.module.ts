import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileBrowserRoutingModule } from './file-browser-routing.module';
import { FileBrowserComponent } from './file-browser.component';
import { FolderTreeModule } from './folder-tree/folder-tree.module';
import { FolderContentModule } from './folder-content/folder-content.module';

@NgModule({
  declarations: [FileBrowserComponent],
  imports: [
    CommonModule,
    FileBrowserRoutingModule,
    FolderTreeModule,
    FolderContentModule
  ]
})
export class FileBrowserModule { }
