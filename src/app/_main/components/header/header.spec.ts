import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';

import { MatToolbarModule } from '@angular/material/toolbar';


describe('HeaderComponent', () => {
  let fixture: ComponentFixture<HeaderComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatToolbarModule
      ],
      declarations: [
        HeaderComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    de = fixture.debugElement;
    fixture.detectChanges();
  }));

  it('should have toolbar', () => {
    expect(de.query(By.css('mat-toolbar'))).toBeDefined();
  });
});
