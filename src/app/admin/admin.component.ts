import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { Album } from '../album.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  //provider provides the service
  providers: [AlbumService]
})
export class AdminComponent implements OnInit {

  //makes AlbumService injectable available to any instance of AdminComponent class
  constructor(private albumService: AlbumService) { }

  ngOnInit() {
  }

  submitForm(title: string, artist: string, description: string, imageUrl: string) {
    var newAlbum: Album = new Album(title, artist, description, imageUrl);
    this.albumService.addAlbum(newAlbum);
  }


}
