import {Component, Input, OnInit} from '@angular/core';

import {ICharacter} from "../../../character/interfaces";
import {CharacterService} from "../../../character/services";

@Component({
  selector: 'app-episode-characters',
  templateUrl: './episode-characters.component.html',
  styleUrls: ['./episode-characters.component.css']
})
export class EpisodeCharactersComponent implements OnInit {
  @Input()
  url: string;

  character: ICharacter;
  id: number;

  constructor(private characterService: CharacterService) {
  }

  ngOnInit(): void {
    this.characterService.getById(this.takeID()).subscribe(value => this.character = value);
  }

  takeID(): number {
    return this.id = +this.url.substring(this.url.lastIndexOf("/") + 1);
  }
}
