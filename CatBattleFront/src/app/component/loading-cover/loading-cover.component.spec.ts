import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingCoverComponent } from './loading-cover.component';

describe('LoadingCoverComponent', () => {
  let component: LoadingCoverComponent;
  let fixture: ComponentFixture<LoadingCoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingCoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
