import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileBrowserComponent } from './file-browser.component';

const routes: Routes = [
  {
    path: '',
    component: FileBrowserComponent
  },
  {
    path: ':path',
    component: FileBrowserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileBrowserRoutingModule { }
