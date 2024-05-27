import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { accesCodeList } from '../data/codes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff-code-modal',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './staff-code-modal.component.html',
  styleUrl: './staff-code-modal.component.scss',
})
export class StaffCodeModalComponent {
  isCodeInError: boolean = false;
  codeAccesFormControl = new FormControl<string | null>('');

  constructor(
    public dialogRef: MatDialogRef<StaffCodeModalComponent>,
    private router: Router
  ) {
    this.codeAccesFormControl?.valueChanges.subscribe((value) => {
      this.isCodeInError = false;
    });
  }

  onClickSubmit(): void {
    if (
      accesCodeList.find((code) => this.codeAccesFormControl?.value == code)
    ) {
      this.dialogRef.close();
      this.router.navigate(['/staff']);
    } else {
      this.isCodeInError = true;
    }
  }
}
