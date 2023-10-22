import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Character } from '../../shared/interfaces/character-interface';
@Injectable()
export class HomeService {

  private apiUrl: string = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) { }

  public getCharacters(): Observable<Character> {
    const url = `${ this.apiUrl }/character`;

    return this.http.get<Character>( url );
  }

}
