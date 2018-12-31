import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderContentComponent } from './folder-content.component';
import { GridViewModule } from './components/grid-view/grid-view.module';
import { ListViewModule } from './components/list-view/list-view.module';

describe('FolderContentComponent', () => {
  let component: FolderContentComponent;
  let fixture: ComponentFixture<FolderContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FolderContentComponent],
      imports: [GridViewModule, ListViewModule]
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
