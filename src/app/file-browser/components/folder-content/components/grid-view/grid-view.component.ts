import { Component, OnInit, Input } from '@angular/core';
import { TreeItem } from 'src/app/file-browser/models';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss']
})
export class GridViewComponent implements OnInit {
  @Input() data: TreeItem[];

  constructor() { }

  ngOnInit() {
  }

}
