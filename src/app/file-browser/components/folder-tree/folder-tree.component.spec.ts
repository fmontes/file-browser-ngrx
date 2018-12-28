import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderTreeComponent } from './folder-tree.component';

describe('FolderTreeComponent', () => {
  let component: FolderTreeComponent;
  let fixture: ComponentFixture<FolderTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FolderTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
