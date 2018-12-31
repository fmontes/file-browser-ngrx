import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewModeSelectorComponent } from './view-mode-selector.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ViewModeSelectorComponent],
  imports: [CommonModule, MatButtonToggleModule, MatIconModule],
  exports: [ViewModeSelectorComponent]
})
export class ViewModeSelectorModule {}
