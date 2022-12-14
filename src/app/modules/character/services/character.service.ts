import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {ICharacter, IPaginatedData} from "../interfaces";
import {urls} from "../../../configs";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(page: number = 1): Observable<IPaginatedData<ICharacter>> {
    return this.httpClient.get<IPaginatedData<ICharacter>>(urls.character, {params: {page}});
  }

  getById(id: number): Observable<ICharacter> {
    return this.httpClient.get<ICharacter>(`${urls.character}/${id}`);
  }
}
