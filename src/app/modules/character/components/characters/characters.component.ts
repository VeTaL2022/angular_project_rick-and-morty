import {Component, OnInit} from '@angular/core';

import {ICharacter} from "../../interfaces";
import {CharacterService} from "../../services";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters: ICharacter[];

  constructor(private characterService: CharacterService) {
  }

  ngOnInit(): void {
    this.characterService.getAll().subscribe(value => this.characters = value.results);
  }

}
