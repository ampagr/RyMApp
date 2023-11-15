import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { environment } from 'src/environments/environment.development';

import { HomeCharacter } from '../interfaces/home.character.interface';
import { CharacterResponse } from '../../shared/interfaces/character-interface';

@Injectable()
export class HomeService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getCharacters(): Observable<HomeCharacter[]> {
    const characterUrl = `${ this.baseUrl }/character`;

    return this.http.get<CharacterResponse>( characterUrl )
    .pipe(
      map<CharacterResponse, HomeCharacter[]>( (characterResponse: CharacterResponse) =>
      characterResponse.results.map( (homeCharacter: HomeCharacter) => ({
        id:      homeCharacter.id,
        name:    homeCharacter.name,
        species: homeCharacter.species,
        gender:  homeCharacter.gender,
        image:   homeCharacter.image,
      }))
   )
);
}

}
