import { Component } from '@angular/core';
import { PlayersFormComponent } from './players-form/players-form.component';
import { MatTabsModule } from '@angular/material/tabs';
import { PairingsUploadComponent } from './pairings-upload/pairings-upload.component';

@Component({
  selector: 'app-staff-page',
  standalone: true,
  templateUrl: './staff-page.component.html',
  styleUrl: './staff-page.component.scss',
  imports: [PlayersFormComponent, PairingsUploadComponent, MatTabsModule],
})
export class StaffPageComponent {}
