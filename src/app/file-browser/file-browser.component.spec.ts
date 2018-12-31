import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileBrowserComponent } from './file-browser.component';
import { FolderContentModule } from './components/folder-content/folder-content.module';
import { FolderTreeModule } from './components/folder-tree/folder-tree.module';
import { TestStore } from '../testing/test-store';

import { Store } from '@ngrx/store';


describe('FileBrowserComponent', () => {
  let component: FileBrowserComponent;
  let fixture: ComponentFixture<FileBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FileBrowserComponent],
      imports: [FolderContentModule, FolderTreeModule],
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
