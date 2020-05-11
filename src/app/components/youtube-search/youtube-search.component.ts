import { Component, OnInit } from '@angular/core';
import { YouTubeSearchService } from 'src/app/services/youtube-search.service';
import { YouTubeSearch } from 'src/app/models/youtube-search.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { SearchModel } from 'src/app/models/search.model'
import { ScheduleModel } from 'src/app/models/schedule.model';
import { ScheduleService } from 'src/app/services/schedule.service';

@Component({
  selector: 'app-youtube-search',
  templateUrl: './youtube-search.component.html',
  styleUrls: ['./youtube-search.component.scss']
})
export class YouTubeSearchComponent implements OnInit {
  public searches = []
  public showYouTubeSearches = []
  public schedule: ScheduleModel
  public details: YouTubeSearch = null
  public search$: Observable<any>
  public showSchedule:boolean = false

  constructor(private YouTubeSearchService: YouTubeSearchService,
              private scheduleService: ScheduleService,
              private store: Store<{searchReducer}>) {
                this.store.pipe(
                  select('searchReducer')).subscribe((data:SearchModel) => {
                    if (data.search !== undefined) {
                      // todo search
                    }
                  })
              }

  ngOnInit(): void {
    this.load()
    this.loadSchedule()
  }

  loadSchedule(): void {
    this.scheduleService.getSchedule()
    .subscribe((schedule:ScheduleModel) => {
      this.schedule = schedule
      if (!this.schedule) {
        this.showSchedule = true
      }
    })
  }

  load() {
    this.YouTubeSearchService.getSearches()
    .subscribe((youTubeSearch: YouTubeSearch[]) => {
      this.searches = youTubeSearch.map(item => {
      })
    })
  }

  showDetails(item): void {
    this.details = item
  }

  closeSchedule(schedule): void {
    this.showSchedule = false
    if (schedule) {
      this.schedule = schedule
    }
  }

  toggleSchedule(): void {
    this.showSchedule = true
  }

  closeDetails(data): void {
    if (data) {
      this.load()
    }
    this.details = null
  }

  isConcluded(item) {

  }

  isLoading(item) {
    
  }
}
