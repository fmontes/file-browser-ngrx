import { Component, OnInit, Input } from '@angular/core';
import { FileTreeItem } from '../../models/file-tree-item.model';

@Component({
  selector: 'app-folder-content',
  templateUrl: './folder-content.component.html',
  styleUrls: ['./folder-content.component.scss']
})
export class FolderContentComponent implements OnInit {
  @Input() data: FileTreeItem[];

  displayedColumns: string[] = ['title', 'modDate', 'fileSize'];

  constructor() {}

  ngOnInit() {
  }
}
