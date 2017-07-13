import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Album } from '../album.model';
import { AlbumService } from '../album.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
  providers: [AlbumService]
})

export class AlbumDetailComponent implements OnInit {
  albumId: string;
  albumToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private albumService: AlbumService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.albumId = urlParameters['id'];
    });
    this.albumToDisplay = this.albumService.getAlbumById(this.albumId);
  }

  //navigateByUrl method lets you navigate to a route by simply passing in the name of the path, which matches the path property in app.routing.ts
  goBack() {
    this.router.navigateByUrl('albums');
  };


}
