import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';

import { HomeCharacter } from '../../interfaces/home.character.interface';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent implements OnInit {

  public homeCharacters: HomeCharacter[] = [];

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  private getCharacters(): void {
    this.homeService.getCharacters().subscribe((homeCharacters) => {
      this.homeCharacters = homeCharacters;
      console.log(homeCharacters);
    });
  }
}
