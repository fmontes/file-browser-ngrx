import { Component, OnInit, Input } from '@angular/core';
import { TreeItem } from 'src/app/file-browser/models';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  @Input() data: TreeItem[];
  displayedColumns: string[] = ['icon', 'title', 'modDate', 'path', 'fileSize'];

  constructor() { }

  ngOnInit() {
  }

}
