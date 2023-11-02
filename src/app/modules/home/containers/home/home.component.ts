import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  private getCharacters(): void {
    this.homeService.getCharacters().subscribe((characters) => {
      console.log(characters);
    });
  }
}
