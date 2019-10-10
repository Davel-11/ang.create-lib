import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { I4tLib01LbrryComponent } from './i4t-lib01-lbrry.component';

describe('I4tLib01LbrryComponent', () => {
  let component: I4tLib01LbrryComponent;
  let fixture: ComponentFixture<I4tLib01LbrryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ I4tLib01LbrryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(I4tLib01LbrryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
