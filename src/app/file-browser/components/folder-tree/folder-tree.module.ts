import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FolderTreeComponent } from './folder-tree.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [FolderTreeComponent],
  imports: [
    CommonModule,
    MatListModule
  ],
  exports: [FolderTreeComponent]
})
export class FolderTreeModule { }
