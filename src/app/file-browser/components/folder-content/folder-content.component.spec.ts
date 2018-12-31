import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTableModule } from '@angular/material/table';

import { FolderContentComponent } from './folder-content.component';

describe('FolderContentComponent', () => {
  let component: FolderContentComponent;
  let fixture: ComponentFixture<FolderContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FolderContentComponent],
      imports: [MatTableModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
