import { Injectable } from '@angular/core';
import { Album } from './album.model';
// import { ALBUMS } from './mock-album';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

//injectable is the stuff we want to be able to use in many different components
@Injectable()
export class AlbumService {

  //sets up a var with the right type to hold our albums data from firebase
  albums: FirebaseListObservable<any[]>;

  //when this class is instantiated, it comes with our Firebase database and it sets the albums var to the list of albums from firebase
  constructor(private database: AngularFireDatabase) {
    this.albums = database.list('albums');
  }

  //this is a method we can call whenever we want access to the albums list from firebase
  getAlbums() {
    return this.albums;
  }

  //this method pushes a new album object to the database
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
                                description: localUpdatedAlbum.description,
                                imageUrl: localUpdatedAlbum.imageUrl});
  }

  deleteAlbum(localAlbumToDelete){
    var albumEntryInFirebase = this.getAlbumById(localAlbumToDelete.$key);
    albumEntryInFirebase.remove();
  }

}
