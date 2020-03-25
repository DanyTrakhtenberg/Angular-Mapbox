import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapboxTaskComponent } from './mapbox-task.component';

describe('MapboxTaskComponent', () => {
  let component: MapboxTaskComponent;
  let fixture: ComponentFixture<MapboxTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapboxTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapboxTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
