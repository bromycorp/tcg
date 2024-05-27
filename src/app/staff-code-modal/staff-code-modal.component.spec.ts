import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffCodeModalComponent } from './staff-code-modal.component';

describe('StaffCodeModalComponent', () => {
  let component: StaffCodeModalComponent;
  let fixture: ComponentFixture<StaffCodeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaffCodeModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StaffCodeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
