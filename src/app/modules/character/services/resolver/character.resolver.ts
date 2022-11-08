import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';
import {ICharacter, IPaginatedData} from "../../interfaces";
import {CharacterService} from "../character.service";

@Injectable({
  providedIn: 'root'
})
export class CharacterResolver implements Resolve<IPaginatedData<ICharacter>> {
  constructor(private characterService: CharacterService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPaginatedData<ICharacter>> {
    const page = route.queryParams['page'];
    return this.characterService.getAll(page);
  }
}
