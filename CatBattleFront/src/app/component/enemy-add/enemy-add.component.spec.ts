import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnemyAddComponent } from './enemy-add.component';

describe('EnemyAddComponent', () => {
  let component: EnemyAddComponent;
  let fixture: ComponentFixture<EnemyAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnemyAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnemyAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
