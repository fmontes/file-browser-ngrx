import { Component, OnInit, Input } from '@angular/core';
import { TreeFileItem } from '../../models/tree-file-item.model';

@Component({
  selector: 'app-folder-content',
  templateUrl: './folder-content.component.html',
  styleUrls: ['./folder-content.component.scss']
})
export class FolderContentComponent implements OnInit {
  @Input() data: TreeFileItem[];

  displayedColumns: string[] = ['title', 'modDate', 'fileSize'];

  constructor() {}

  ngOnInit() {
  }
}
