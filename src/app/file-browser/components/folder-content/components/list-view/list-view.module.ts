import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { ListIconModule } from '../list-icon/list-icon.module';
import { ListViewComponent } from './list-view.component';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule,
    ListIconModule
  ],
  declarations: [ListViewComponent],
  exports: [ListViewComponent]
})
export class ListViewModule { }
