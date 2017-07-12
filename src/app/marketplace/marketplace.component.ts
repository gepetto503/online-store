import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { Router } from '@angular/router';
import { AlbumService } from '../album.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [AlbumService]
})

export class MarketplaceComponent implements OnInit {
  //sets up a variable ready to receive an object from firebase,
  //ultimately fed to it by the getAlbums method in the AlbumService injectable
  albums: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  //this constructor has two... properties? router and albumService.  router is an instance of the router, so this component has access to a router and knows what it means.  albumService is an instance of the AlbumService class from that service, so this component has access to stuff in there, too.
  constructor(private router: Router, private albumService: AlbumService){}

  //whenever an object of this class is initialized...
  ngOnInit(){
    //set the albums property, which is a FirebaseListObservable file type...
    //albumService is injected from the service, so we have access to its getAlbums method, which just return an album object from firebase.
    this.albums = this.albumService.getAlbums();
  }

  goToDetailPage(clickedAlbum) {
    this.router.navigate(['albums', clickedAlbum.$key]);
  };



}
