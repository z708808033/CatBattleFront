import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnemyDetailComponent } from './enemy-detail.component';

describe('EnemyDetailComponent', () => {
  let component: EnemyDetailComponent;
  let fixture: ComponentFixture<EnemyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnemyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnemyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
