import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireDatabase, AngularFireDatabaseModule, AngularFireList } from '@angular/fire/compat/database';
import { FileUpload } from '../../models/fileupload';

@Component({
  selector: 'app-player-pairings',
  standalone: true,
  imports: [HttpClientModule, AngularFireDatabaseModule, AngularFireStorageModule],
  templateUrl: './player-pairings.component.html',
  styleUrl: './player-pairings.component.scss',
})
export class PlayerPairingsComponent implements OnInit {
  pairingsUrl: string =
    'https://firebasestorage.googleapis.com/v0/b/bromycorp.appspot.com/o/test.PNG?alt=media&token=6dba9145-2e96-404e-a5d4-2b67c9da6977';
  private basePath = '/uploads';

  constructor(private http: HttpClient,
    private fireStorage: AngularFireStorage,
    private database: AngularFireDatabase
  ) {}

  ngOnInit() {
    console.log(this.getFiles());
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    this.http
      .get(
        'https://bromycorp-default-rtdb.europe-west1.firebasedatabase.app/',
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        }
      )
      .subscribe((_) => console.log(_));
  }

  getFiles(): AngularFireList<FileUpload> {
    return this.database.list(this.basePath, ref =>
      ref.limitToLast(1));
  }
}
