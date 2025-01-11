import { Component } from '@angular/core';
import 'firebase/firestore';
import { FileUploadService } from '../../services/file-upload.service';
import { FileUpload } from '../../models/fileupload';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-pairings-upload',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
  ],
  templateUrl: './pairings-upload.component.html',
  styleUrl: './pairings-upload.component.scss',
})
export class PairingsUploadComponent {
  selectedFiles?: FileList;
  currentFileUpload?: FileUpload;
  percentage = 0;
  fileUploadName: string = '';
  isStandingsChecked: boolean = false;
  fileNameFormControl = new FormControl<string>({
    value: '',
    disabled: this.isInputNameDisabled(),
  });

  constructor(private uploadService: FileUploadService) {}

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);
      this.selectedFiles = undefined;

      if (file) {
        console.log(file);
        this.currentFileUpload = new FileUpload(
          this.isStandingsChecked ? "STANDINGS" : this.getFileNameValue(),
          file.name,
          '',
          file
        );
        this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(
          (percentage) => {
            this.percentage = Math.round(percentage ? percentage : 0);
          },
          (error) => {
            console.log(error);
          }
        );
      }
    }
  }

  getFileNameValue(): string {
    return this.fileNameFormControl?.value == null
      ? ''
      : this.fileNameFormControl?.value;
  }

  isInputNameDisabled(): boolean {
    return this.isStandingsChecked;
  }

  updateInput(): void {
    this.isInputNameDisabled()
      ? this.fileNameFormControl.disable()
      : this.fileNameFormControl.enable();
  }
}
