import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IEpisode, IPaginatedData} from "../interfaces";
import {urls} from "../../../configs";

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(page: number = 1): Observable<IPaginatedData<IEpisode>> {
    return this.httpClient.get<IPaginatedData<IEpisode>>(urls.episode);
  }

  getById(id: number): Observable<IEpisode> {
    return this.httpClient.get<IEpisode>(`${urls.episode}/${id}`);
  }
}
