import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListIconComponent } from './list-icon.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [CommonModule, MatIconModule],
  declarations: [ListIconComponent],
  exports: [ListIconComponent]
})
export class ListIconModule {}
