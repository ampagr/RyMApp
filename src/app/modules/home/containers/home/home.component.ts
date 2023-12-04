import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Card } from 'src/app/modules/shared/interfaces/card.interface';
import { HomeCharacter } from '../../interfaces/home.character.interface';
import { HomeService } from '../../services/home.service';

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

  public setHomeCharacters(formValue: any): void {
    this.homeService
      .setGender(formValue.gender)
      .subscribe((filteredCharacters: HomeCharacter[]) => {
        this.homeCharacters = filteredCharacters;
      });
  }

  public setCardConfig(homeCharacter: HomeCharacter): Card {
    return {
      name: homeCharacter.name,
      species: homeCharacter.species,
      gender: homeCharacter.gender,
      image: homeCharacter.image,
    };
  }

  public getCharacters(): void {
    this.homeService.getCharacters().subscribe((homeCharacters) => {
      this.homeCharacters = homeCharacters;
    });
  }
}
