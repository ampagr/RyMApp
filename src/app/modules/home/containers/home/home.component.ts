import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/modules/shared/interfaces/character-interface';
import { HomeService } from '../../services/home.service';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent implements OnInit {
  public characters!: Character;

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  private getCharacters(): void {
    this.homeService.getCharacters().subscribe((characters) => {
      this.characters = characters;
      console.log(characters);
    });
  }
}
