import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { PlayerPairingsComponent } from './player-pairings/player-pairings.component';

@Component({
  selector: 'app-player-page',
  standalone: true,
  imports: [MatTabsModule, PlayerPairingsComponent],
  templateUrl: './player-page.component.html',
  styleUrl: './player-page.component.scss',
})
export class PlayerPageComponent {}
