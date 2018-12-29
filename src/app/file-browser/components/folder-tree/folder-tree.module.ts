import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FolderTreeComponent } from './folder-tree.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [FolderTreeComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule
  ],
  exports: [FolderTreeComponent]
})
export class FolderTreeModule { }
