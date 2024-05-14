import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StaffPageComponent } from './staff-page/staff-page.component';
import { PlayerPageComponent } from './player-page/player-page.component';

export const routes: Routes = [
  { path: 'staff', component: StaffPageComponent },
  { path: 'player', component: PlayerPageComponent },
];
