import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileBrowserComponent } from './file-browser.component';
import * as fromGuards from './guards';

const routes: Routes = [
  {
    path: '',
    component: FileBrowserComponent,
    canActivate: [fromGuards.FoldersGuard, fromGuards.TreeItemGuard]
  },
  {
    path: ':path',
    component: FileBrowserComponent,
    canActivate: [fromGuards.FoldersGuard, fromGuards.TreeItemGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileBrowserRoutingModule { }
