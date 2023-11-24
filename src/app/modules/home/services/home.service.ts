import {
  CharacterResponse,
  Gender,
} from '../../shared/interfaces/character-interface';
import { environment } from 'src/environments/environment.development';
import { HomeCharacter } from '../interfaces/home.character.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable()
export class HomeService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public getCharacters(): Observable<HomeCharacter[]> {
    const charactersUrl = `${this.baseUrl}/character`;

    return this.http.get<CharacterResponse>(charactersUrl).pipe(
      map<CharacterResponse, HomeCharacter[]>(
        (characterResponse: CharacterResponse) =>
          characterResponse.results.map((homeCharacter: HomeCharacter) => ({
            id: homeCharacter.id,
            name: homeCharacter.name,
            species: homeCharacter.species,
            gender: homeCharacter.gender,
            image: homeCharacter.image,
          }))
      )
    );
  }

  public setGender(gender: Gender): Observable<HomeCharacter[]> {
    const characterUrl = `${this.baseUrl}/character/?gender=${gender}`;

    return this.http.get<CharacterResponse>(characterUrl).pipe(
      map<CharacterResponse, HomeCharacter[]>(
        (characterResponse: CharacterResponse) =>
        characterResponse.results.map((homeCharacter: HomeCharacter) => ({
          id: homeCharacter.id,
          name: homeCharacter.name,
          species: homeCharacter.species,
          gender: homeCharacter.gender,
          image: homeCharacter.image,
        }))
        ),
        map((homeCharacters: HomeCharacter[]) =>
        homeCharacters.filter((character) => character.gender === gender)
        )
      );
  }
}
