import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';

import { FolderContentComponent } from './folder-content.component';
import { ListIconModule } from './components/list-icon/list-icon.module';

@NgModule({
  declarations: [FolderContentComponent],
  imports: [
    CommonModule,
    MatTableModule,
    ListIconModule
  ],
  exports: [FolderContentComponent]
})
export class FolderContentModule { }
