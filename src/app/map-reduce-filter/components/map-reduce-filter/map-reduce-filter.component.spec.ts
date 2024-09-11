import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapReduceFilterComponent } from './map-reduce-filter.component';

describe('MapReduceFilterComponent', () => {
  let component: MapReduceFilterComponent;
  let fixture: ComponentFixture<MapReduceFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapReduceFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapReduceFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
