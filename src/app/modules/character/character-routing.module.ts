import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CharactersComponent} from "./components/characters/characters.component";
import {CharacterResolver} from "./services/resolver/character.resolver";

const routes: Routes = [
  {
    path: '',
    component: CharactersComponent,
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
    resolve: {data: CharacterResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule {
}
