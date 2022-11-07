import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {ActivatedRoute, Router} from "@angular/router";
import {map} from "rxjs";

import {IEpisode, IPaginatedData} from "../../interfaces";

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit, AfterViewInit {
  episodes: IEpisode[];
  count: number;

  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private detectorRef: ChangeDetectorRef) {
  }

  ngAfterViewInit(): void {
    this.activatedRoute.queryParams.subscribe(({page}) => {
      this.paginator.pageIndex = page - 1;
      this.detectorRef.detectChanges();
    });
    this.paginator.page.subscribe((page) => {
      this.router.navigate([], {queryParams: {page: page.pageIndex + 1}});
    });
  }

  ngOnInit(): void {
    this.activatedRoute.data.pipe(
      map(value => value['data'] as IPaginatedData<IEpisode>)
    ).subscribe((value) => {
      this.count = value.info.count;
      this.episodes = value.results;
    })
  }
}
