import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileBrowserComponent } from './file-browser.component';
import * as fromGuards from './guards';

const routes: Routes = [
  {
    path: '',
    component: FileBrowserComponent,
    canActivate: [fromGuards.FoldersGuard, fromGuards.TreeFileGuard]
  },
  {
    path: ':path',
    component: FileBrowserComponent,
    canActivate: [fromGuards.FoldersGuard, fromGuards.TreeFileGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileBrowserRoutingModule { }
