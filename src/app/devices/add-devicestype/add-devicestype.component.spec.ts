import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDevicestypeComponent } from './add-devicestype.component';

describe('AddDevicestypeComponent', () => {
  let component: AddDevicestypeComponent;
  let fixture: ComponentFixture<AddDevicestypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDevicestypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDevicestypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
