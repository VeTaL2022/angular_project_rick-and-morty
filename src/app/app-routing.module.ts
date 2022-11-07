import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', loadChildren: () => import('./modules/home/home.module').then(value => value.HomeModule)},
      {
        path: 'character',
        loadChildren: () => import('./modules/character/character.module').then(value => value.CharacterModule)
      },
      {
        path: 'episode',
        loadChildren: () => import('./modules/episode/episode.module').then(value => value.EpisodeModule)
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
