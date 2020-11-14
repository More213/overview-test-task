import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewFormComponent } from './overview-form.component';

describe('OverviewFormComponent', () => {
  let component: OverviewFormComponent;
  let fixture: ComponentFixture<OverviewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
