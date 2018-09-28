import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatListDataComponent } from './cat-list-data.component';

describe('CatListDataComponent', () => {
  let component: CatListDataComponent;
  let fixture: ComponentFixture<CatListDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatListDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatListDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
