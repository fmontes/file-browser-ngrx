import { Component, OnInit, Input } from '@angular/core';
import { TreeItem, TreeItemType } from 'src/app/file-browser/models';

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss']
})
export class GridItemComponent implements OnInit {
  @Input() item: TreeItem;
  isImage: boolean;

  constructor() { }

  ngOnInit() {
    this.isImage = this.item.type === TreeItemType.FILE && !!this.item.url;
  }

}
