import { Component, OnInit } from '@angular/core';

interface File {
  identifier: string;
  fileName: string;
  extension: string;
  modDate: string;
  title: string;
  fileSize: number;
  path: string;
}

const ELEMENT_DATA: File[] = [
  {
    identifier: 'ddc3b60a-df3d-4554-a0f3-90f3c7c276b8',
    fileName: 'sit',
    extension: 'docx',
    modDate: 'Fri Oct 11 2013 22:16:36 GMT+0000 (UTC)',
    title: 'cillum incididunt cupidatat',
    fileSize: 2422,
    path: ''
  },
  {
    identifier: '56120f14-7981-4c7f-865f-f4a7a8ff026f',
    fileName: 'mollit',
    extension: 'js',
    modDate: 'Thu Nov 14 1996 13:36:39 GMT+0000 (UTC)',
    title: 'sunt pariatur ullamco',
    fileSize: 1651,
    path: ''
  },
  {
    identifier: 'ce2b3873-2130-4d5f-a598-a2f6d9cc64d9',
    fileName: 'amet',
    extension: 'html',
    modDate: 'Fri Sep 16 2005 03:46:17 GMT+0000 (UTC)',
    title: 'velit ut dolor',
    fileSize: 2685,
    path: ''
  },
  {
    identifier: 'a3f9a51b-4830-403c-bec3-7ffc4e3da9c2',
    fileName: 'dolor',
    extension: 'js',
    modDate: 'Tue Aug 22 2000 20:57:59 GMT+0000 (UTC)',
    title: 'mollit nulla esse',
    fileSize: 3068,
    path: ''
  },
  {
    identifier: 'bb69a3f9-9f66-47f6-9332-71de650e043b',
    fileName: 'est',
    extension: 'txt',
    modDate: 'Wed Mar 29 1978 15:05:55 GMT+0000 (UTC)',
    title: 'ex pariatur sit',
    fileSize: 3092,
    path: ''
  }
];

@Component({
  selector: 'app-folder-content',
  templateUrl: './folder-content.component.html',
  styleUrls: ['./folder-content.component.scss']
})
export class FolderContentComponent implements OnInit {
  displayedColumns: string[] = ['title', 'modDate', 'fileSize'];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit() {}
}
