import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { FolderTreeComponent } from './folder-tree.component';

describe('FolderTreeComponent', () => {
  let component: FolderTreeComponent;
  let fixture: ComponentFixture<FolderTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FolderTreeComponent],
      imports: [MatListModule, MatIconModule]
    }).compileComponents();
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
