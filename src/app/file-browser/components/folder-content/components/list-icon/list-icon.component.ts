import { Component, OnInit, Input } from '@angular/core';
import { TreeItemType } from 'src/app/file-browser/models';

@Component({
  selector: 'app-list-icon',
  templateUrl: './list-icon.component.html',
  styleUrls: ['./list-icon.component.scss']
})
export class ListIconComponent implements OnInit {
  @Input() type: TreeItemType;

  constructor() { }

  ngOnInit() {
  }

}
