import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  AngularFireStorage,
  AngularFireStorageModule,
} from '@angular/fire/compat/storage';
import {
  AngularFireDatabase,
  AngularFireDatabaseModule,
  AngularFireList,
} from '@angular/fire/compat/database';
import { FileUpload } from '../../models/fileupload';
import { FileUploadService } from '../../services/file-upload.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-player-pairings',
  standalone: true,
  imports: [
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
  ],
  templateUrl: './player-pairings.component.html',
  styleUrl: './player-pairings.component.scss',
})
export class PlayerPairingsComponent implements OnInit {
  fileUploads?: any[];
  pictureOneUrl: FileUpload | null = null;

  constructor(private uploadService: FileUploadService) {}

  ngOnInit() {
    const headers = new HttpHeaders();

    this.uploadService
      .getFiles(6)
      .snapshotChanges()
      .pipe(
        map((changes) => {
          // store the key
          console.log(changes)
          return changes.map((c) => ({ key: c.payload.key, url: c.payload.val() }));
        })
      )
      .subscribe((fileUploads) => {
        //fileUploads.forEach((file) => console.log('file' + file));
        this.fileUploads = fileUploads;
        this.pictureOneUrl = fileUploads[0]?.url;
        console.log(this.pictureOneUrl)
        console.log(fileUploads[0]);
      });

    //headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    //this.http.get('https://bromycorp-default-rtdb.europe-west1.firebasedatabase.app/',{headers: {'Access-Control-Allow-Origin': '*',},}).subscribe((_) => console.log(_));
  }
}
