import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerPairingsComponent } from './player-pairings.component';

describe('PlayerPairingsComponent', () => {
  let component: PlayerPairingsComponent;
  let fixture: ComponentFixture<PlayerPairingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerPairingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayerPairingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
