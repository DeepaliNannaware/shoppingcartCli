import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubSubCatComponent } from './sub-sub-cat.component';

describe('SubSubCatComponent', () => {
  let component: SubSubCatComponent;
  let fixture: ComponentFixture<SubSubCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubSubCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubSubCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
