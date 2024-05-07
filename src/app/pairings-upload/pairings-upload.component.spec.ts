import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PairingsUploadComponent } from './pairings-upload.component';

describe('PairingsUploadComponent', () => {
  let component: PairingsUploadComponent;
  let fixture: ComponentFixture<PairingsUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PairingsUploadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PairingsUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
