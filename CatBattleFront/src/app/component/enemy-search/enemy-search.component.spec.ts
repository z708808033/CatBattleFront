import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnemySearchComponent } from './enemy-search.component';

describe('EnemySearchComponent', () => {
  let component: EnemySearchComponent;
  let fixture: ComponentFixture<EnemySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnemySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnemySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
