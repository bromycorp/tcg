import { Component } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { PlayersFormComponent } from './staff-page/players-form/players-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { StaffCodeModalComponent } from './staff-code-modal/staff-code-modal.component';
import { version } from './data/version';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PlayersFormComponent,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tcg';
  vers = version;
  isStaffCodeInputVisible: boolean = false;

  constructor(private router: Router, private dialog: MatDialog) {}

  navigateToStaff(): void {
    this.router.navigate(['/staff']);
  }

  clickOnStaff(): void {
    const dialogRef = this.dialog.open(StaffCodeModalComponent);

    dialogRef.afterClosed().subscribe((result) => {
      //
    });
  }

  navigateToPlayer(): void {
    this.router.navigate(['/player']);
  }
}
