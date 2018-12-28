import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';

import { FolderContentComponent } from './folder-content.component';

@NgModule({
  declarations: [FolderContentComponent],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [FolderContentComponent]
})
export class FolderContentModule { }
