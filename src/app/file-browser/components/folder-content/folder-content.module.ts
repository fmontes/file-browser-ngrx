import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';

import { FolderContentComponent } from './folder-content.component';
import { ListViewModule } from './components/list-view/list-view.module';
import { GridViewModule } from './components/grid-view/grid-view.module';

@NgModule({
  declarations: [FolderContentComponent],
  imports: [
    CommonModule,
    ListViewModule,
    GridViewModule
  ],
  exports: [FolderContentComponent]
})
export class FolderContentModule { }
