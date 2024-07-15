import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { FirebaseStorage, Storage } from '@angular/fire/storage';

@Component({
  selector: 'app-player-pairings',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './player-pairings.component.html',
  styleUrl: './player-pairings.component.scss',
})
export class PlayerPairingsComponent implements OnInit {
  pairingsUrl: string =
    'https://firebasestorage.googleapis.com/v0/b/bromycorp.appspot.com/o/test.PNG?alt=media&token=6dba9145-2e96-404e-a5d4-2b67c9da6977';

  constructor(private http: HttpClient) {}

  ngOnInit() {
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
}
