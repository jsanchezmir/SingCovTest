import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliciesTableComponent } from './policies-table.component';

describe('PoliciesTableComponent', () => {
  let component: PoliciesTableComponent;
  let fixture: ComponentFixture<PoliciesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliciesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliciesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
