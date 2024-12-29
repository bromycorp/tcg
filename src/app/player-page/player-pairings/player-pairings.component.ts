import {
  HttpClientModule,
} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  AngularFireStorageModule,
} from '@angular/fire/compat/storage';
import {
  AngularFireDatabaseModule,
} from '@angular/fire/compat/database';
import { FileUpload } from '../../models/fileupload';
import { FileUploadService } from '../../services/file-upload.service';
import { map } from 'rxjs/operators';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-player-pairings',
  standalone: true,
  imports: [
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    MatTabsModule,
  ],
  templateUrl: './player-pairings.component.html',
  styleUrl: './player-pairings.component.scss',
})
export class PlayerPairingsComponent implements OnInit {
  fileUploads?: any[];
  pictureOneUrl: FileUpload | null = null;

  constructor(private uploadService: FileUploadService) {}

  ngOnInit() {
    this.uploadService
      .getFiles(6)
      .snapshotChanges()
      .pipe(
        map((changes) => {
          return changes.map((c) => ({
            key: c.payload.key,
            url: c.payload.val(),
          }));
        })
      )
      .subscribe((fileUploads) => {
        this.fileUploads = fileUploads;
        this.pictureOneUrl = fileUploads[0]?.url;
      });
  }
}
