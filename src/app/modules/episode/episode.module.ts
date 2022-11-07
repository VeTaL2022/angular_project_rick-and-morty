import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {MatPaginatorModule} from "@angular/material/paginator";

import {EpisodeRoutingModule} from './episode-routing.module';
import {EpisodeComponent} from './components/episode/episode.component';
import {EpisodesComponent} from './components/episodes/episodes.component';
import {EpisodeDetailsComponent} from './components/episode-details/episode-details.component';
import {EpisodeCharactersComponent} from './components/episode-characters/episode-characters.component';


@NgModule({
  declarations: [
    EpisodesComponent,
    EpisodeComponent,
    EpisodeDetailsComponent,
    EpisodeCharactersComponent
  ],
  imports: [
    CommonModule,
    EpisodeRoutingModule,
    MatPaginatorModule,
    MatCardModule
  ]
})
export class EpisodeModule {
}
