import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"bromycorp","appId":"1:703940865826:web:55e2012651c5d1a2867f7b","databaseURL":"https://bromycorp-default-rtdb.europe-west1.firebasedatabase.app","storageBucket":"bromycorp.appspot.com","apiKey":"AIzaSyBBjYsrzfJP4CpmRlpfsWUKQUzaKxE1fAE","authDomain":"bromycorp.firebaseapp.com","messagingSenderId":"703940865826"})), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase()), provideStorage(() => getStorage())]
};
