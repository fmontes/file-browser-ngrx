import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridItemComponent } from './grid-item.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [CommonModule, MatIconModule, MatCardModule],
  declarations: [GridItemComponent],
  exports: [GridItemComponent]
})
export class GridItemModule {}
