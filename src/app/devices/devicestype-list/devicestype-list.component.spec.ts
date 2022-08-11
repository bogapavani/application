import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicestypeListComponent } from './devicestype-list.component';

describe('DevicestypeListComponent', () => {
  let component: DevicestypeListComponent;
  let fixture: ComponentFixture<DevicestypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevicestypeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevicestypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
