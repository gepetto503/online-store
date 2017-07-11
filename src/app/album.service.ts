import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { ALBUMS } from './mock-album';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AlbumService {
  
  albums: FirebaseListObservable<any[]>;

  constructor() { }

  getAlbums() {
    return ALBUMS;
  }

  getAlbumById(albumId: number){
    for (var i = 0; i <= ALBUMS.length - 1; i++) {
      if (ALBUMS[i].id === albumId) {
        return ALBUMS[i];
      }
    }
  }

}
