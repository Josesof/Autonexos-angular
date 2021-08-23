import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcargoComponent } from './editcargo.component';

describe('EditcargoComponent', () => {
  let component: EditcargoComponent;
  let fixture: ComponentFixture<EditcargoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcargoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
