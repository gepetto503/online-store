import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { ALBUMS } from './mock-album';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

//injectable is the stuff we want to be able to use in many different components
@Injectable()
export class AlbumService {

  //sets up a var with the right type to hold our albums data from firebase
  albums: FirebaseListObservable<any[]>;

  //actually sets albums var to the data from firebase
  constructor(private database: AngularFireDatabase) {
    this.albums = database.list('albums');
  }

  getAlbums() {
    return this.albums;
  }

  addAlbum(newAlbum: Album) {
    this.albums.push(newAlbum);
  }

  getAlbumById(albumId: string){
    return this.database.object('/albums/' + albumId);
  }

  updateAlbum(localUpdatedAlbum){
    var albumEntryInFirebase = this.getAlbumById(localUpdatedAlbum.$key);
    albumEntryInFirebase.update({title: localUpdatedAlbum.title,
                                artist: localUpdatedAlbum.artist,
                                description: localUpdatedAlbum.description});
  }

  deleteAlbum(localAlbumToDelete){
    var albumEntryInFirebase = this.getAlbumById(localAlbumToDelete.$key);
    albumEntryInFirebase.remove();
  }

}
