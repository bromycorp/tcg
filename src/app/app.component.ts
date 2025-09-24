import { Component, OnInit } from '@angular/core';
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
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StaffCodeModalComponent } from './staff-code-modal/staff-code-modal.component';
import { version } from './data/version';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BehaviorSubject } from 'rxjs';

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
    ReactiveFormsModule,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'tcg';
  vers = version;
  isStaffCodeInputVisible: boolean = false;
  popidFound: BehaviorSubject <boolean> = new BehaviorSubject<boolean>(this.isPopidAlreadySaved());
  popidFormControl = new FormControl<string>({
      value: '',
      disabled: false,
    });
  

  constructor(private router: Router, private dialog: MatDialog) {}

  ngOnInit() {
    this.setPopidFound();
  }

  savePopid(): void {
    localStorage.setItem('popid', this.getPopidValue());
    this.setPopidFound();
    this.popidFormControl.disable();
  }

  resetPopid(): void {
    localStorage.removeItem('popid');
    this.setPopidFound();
    this.popidFormControl.enable();
  }

  getPopidValue(): string {
    return this.popidFormControl?.value == null
      ? ''
      : this.popidFormControl?.value;
  }

  isPopidAlreadySaved(): boolean {
    return localStorage.getItem('popid') !== null;
  }

  getStoredPopid(): string | null {
    return localStorage.getItem('popid');
  }

  setPopidFound(): void {
    this.popidFound.next(this.isPopidAlreadySaved());
    if (this.isPopidAlreadySaved()) {this.popidFormControl.disable()};
  }
}
