import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment.development';

import { Character } from '../../shared/interfaces/character-interface';
@Injectable()
export class HomeService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getCharacters(): Observable<Character> {
    const url = `${ this.baseUrl }/character`;

    return this.http.get<Character>( url );
  }

}
