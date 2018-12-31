import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatGridListModule} from '@angular/material/grid-list';

import { GridViewComponent } from './grid-view.component';
import { GridItemModule } from '../grid-item/grid-item.module';

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    GridItemModule
  ],
  declarations: [GridViewComponent],
  exports: [GridViewComponent]
})
export class GridViewModule { }
