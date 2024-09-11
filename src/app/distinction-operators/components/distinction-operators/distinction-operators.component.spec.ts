import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistinctionOperatorsComponent } from './distinction-operators.component';

describe('DistinctionOperatorsComponent', () => {
  let component: DistinctionOperatorsComponent;
  let fixture: ComponentFixture<DistinctionOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistinctionOperatorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistinctionOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
