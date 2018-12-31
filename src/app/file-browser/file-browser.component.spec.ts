import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileBrowserComponent } from './file-browser.component';
import { FolderContentModule } from './components/folder-content/folder-content.module';
import { FolderTreeModule } from './components/folder-tree/folder-tree.module';
import { TestStore } from '../testing/test-store';

import { Store } from '@ngrx/store';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ViewModeSelectorModule } from './components/view-mode-selector/view-mode-selector.module';

describe('FileBrowserComponent', () => {
  let component: FileBrowserComponent;
  let fixture: ComponentFixture<FileBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FileBrowserComponent],
      imports: [
        BrowserAnimationsModule,
        FolderContentModule,
        FolderTreeModule,
        MatInputModule,
        MatToolbarModule,
        ViewModeSelectorModule
      ],
      providers: [
        {
          provide: Store,
          useClass: TestStore
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
