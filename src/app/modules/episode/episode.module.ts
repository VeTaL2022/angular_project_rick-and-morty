import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodeRoutingModule } from './episode-routing.module';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { EpisodeComponent } from './components/episode/episode.component';
import { EpisodeDetailsComponent } from './components/episode-details/episode-details.component';


@NgModule({
  declarations: [
    EpisodesComponent,
    EpisodeComponent,
    EpisodeDetailsComponent
  ],
  imports: [
    CommonModule,
    EpisodeRoutingModule
  ]
})
export class EpisodeModule { }
