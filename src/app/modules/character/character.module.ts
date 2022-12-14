import {MatCardModule} from "@angular/material/card";
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {CharacterRoutingModule} from './character-routing.module';
import {CharactersComponent} from './components/characters/characters.component';
import {CharacterComponent} from './components/character/character.component';
import {MatPaginatorModule} from "@angular/material/paginator";


@NgModule({
  declarations: [
    CharactersComponent,
    CharacterComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    MatCardModule,
    MatPaginatorModule
  ]
})
export class CharacterModule {
}
