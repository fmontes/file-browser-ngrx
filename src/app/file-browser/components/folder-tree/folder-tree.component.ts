import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FolderItem } from '../../models';

@Component({
  selector: 'app-folder-tree',
  templateUrl: './folder-tree.component.html',
  styleUrls: ['./folder-tree.component.scss']
})
export class FolderTreeComponent implements OnInit {
  @Input() data: FolderItem[];
  @Input() active: string;
  @Output() selected: EventEmitter<FolderItem> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    console.log('click');
  }

}
