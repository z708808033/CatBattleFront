import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnemyListDataComponent } from './enemy-list-data.component';

describe('EnemyListDataComponent', () => {
  let component: EnemyListDataComponent;
  let fixture: ComponentFixture<EnemyListDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnemyListDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnemyListDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
