import { Component, OnInit } from '@angular/core';
import { Gender } from 'src/app/modules/shared/interfaces/character-interface';
import { HomeCharacter } from '../../interfaces/home.character.interface';
import { HomeService } from '../../services/home.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent implements OnInit {
  public homeCharacters: HomeCharacter[] = [];

  constructor(private homeService: HomeService, private router: Router) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  public navigateToDetail(id: number): void {
    this.router.navigate(['detail/', id]);
  }

  public showSelectedGender(gender: Gender): void {
    this.homeService.getCharacters().subscribe((homeCharacters) => {
      if (gender) {
        this.homeCharacters = homeCharacters
          .filter((character: HomeCharacter) => character.gender === gender)
          .map((selectedCharacter: HomeCharacter) => ({
            id: selectedCharacter.id,
            name: selectedCharacter.name,
            species: selectedCharacter.species,
            gender: selectedCharacter.gender,
            image: selectedCharacter.image,
          }));
      } else {
        this.homeCharacters = homeCharacters;
      }
    });
  }

  private getCharacters(): void {
    this.homeService.getCharacters().subscribe((homeCharacters) => {
      this.homeCharacters = homeCharacters;
    });
  }
}
