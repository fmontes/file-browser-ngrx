import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-view-mode-selector',
  templateUrl: './view-mode-selector.component.html',
  styleUrls: ['./view-mode-selector.component.scss']
})
export class ViewModeSelectorComponent implements OnInit {
  @Input() value: string;
  @Output() selected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
