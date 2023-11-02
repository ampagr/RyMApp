import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment.development';

import { DetailCharacter } from '../interfaces/detail.interface';

@Injectable()
export class DetailService {
  private baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public getCharacterById( id: number): Observable<DetailCharacter> {
    const characterIdUrl = `${this.baseUrl}/character/${id}`;

    return this.http.get<DetailCharacter>(characterIdUrl);
  }
}
