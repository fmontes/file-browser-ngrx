import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { TreeItem } from '../../models';

@Component({
  selector: 'app-folder-tree',
  templateUrl: './folder-tree.component.html',
  styleUrls: ['./folder-tree.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FolderTreeComponent implements OnInit {
  @Input() data: TreeItem[];
  @Input() active: string;
  @Output() selected: EventEmitter<TreeItem> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    console.log('click');
  }

}
