import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { TreeItem } from '../../models';

@Component({
  selector: 'app-folder-content',
  templateUrl: './folder-content.component.html',
  styleUrls: ['./folder-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FolderContentComponent implements OnInit {
  @Input() data: TreeItem[];
  @Input() grid: boolean;

  constructor() {}

  ngOnInit() {
  }
}
