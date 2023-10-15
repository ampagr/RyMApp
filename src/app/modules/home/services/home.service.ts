import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Character } from '../../shared/interfaces/character-interface';

@Injectable({providedIn: 'root'})
export class HomeService {

  private apiUrl: string = 'https://rickandmortyapi.com/api';

  public characters: Character[] = [];

  constructor(private http: HttpClient) { }

  public getCharacter(): Observable<Character[]> {
    const url = `${ this.apiUrl }/character`;

    return this.http.get<Character[]>( url );
  }

}
