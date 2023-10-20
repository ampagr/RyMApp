import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { Character } from 'src/app/modules/shared/interfaces/character-interface';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent implements OnInit{

  public characters: Character[] = [];

  constructor( private homeService: HomeService ) {}

  ngOnInit(): void {
    this.homeService.getCharacter()
    .subscribe( characters => {
      this.characters = characters;
      console.log(characters)
    })
  }
}
