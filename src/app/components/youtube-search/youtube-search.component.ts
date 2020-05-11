import { Component, OnInit } from '@angular/core';
import { YouTubeSearchService } from 'src/app/services/youtube-search.service';
import { YouTubeSearchModel } from 'src/app/models/youtube-search.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { SearchModel } from 'src/app/models/search.model'
import { ScheduleModel } from 'src/app/models/schedule.model';
import { ScheduleService } from 'src/app/services/schedule.service';
import { showToast } from 'src/app/reducers/utilities';
import { Toast } from 'src/app/models/toast.model'
import { ToastType } from 'src/app/models/toast-type.model';

@Component({
  selector: 'app-youtube-search',
  templateUrl: './youtube-search.component.html',
  styleUrls: ['./youtube-search.component.scss']
})
export class YouTubeSearchComponent implements OnInit {
  public searches = []
  public schedule: ScheduleModel = {
    _id: '',
    sunday: 0,
    monday: 0,
    tuesday: 0,
    wednesday: 0,
    thursday: 0,
    friday: 0,
    saturday: 0
  }
  public details: YouTubeSearchModel = null
  public search$: Observable<any>
  public showSchedule:boolean = false

  constructor(private YouTubeSearchService: YouTubeSearchService,
              private scheduleService: ScheduleService,
              private store: Store,
              private searchStore: Store<{searchReducer}>,
              private utilitiesReducer: Store<{utilitiesReducer}>) {
                this.searchStore.pipe(
                  select('searchReducer')).subscribe((data:SearchModel) => {
                    if (data.search !== undefined) {
                      if (!this.schedule || !this.schedule._id) {
                        let toast = new Toast('É necessário cadastrar uma agenda',
                          new ToastType().error)
                        this.store.dispatch(new showToast(toast))
                      } else if (data.search.length > 3) {
                        this.closeDetails()
                        this.closeSchedule(null)
                        this.addYouTubeSearch(data.search)
                      }
                    }
                  })
              }

  ngOnInit(): void {
    this.load()
    this.loadSchedule()
  }

  addYouTubeSearch(text): void {
    this.YouTubeSearchService.insert({text})
    .subscribe((search: YouTubeSearchModel) => {
      let newSearch = {
        id: search._id,
        text,
        date: search.date,
        daysLong: 0,
        words: []
      }
      this.searches.push(newSearch)
      setTimeout(() => {
        this.load()
      }, 50000)
    })
  }

  formatSearchDate(date) {
    let split = date.split('.')[0].split('T')
    let dateSplit = split[0].split('-')
    let time = split[1]
    return `${dateSplit[2]}/${dateSplit[1]}/${dateSplit[0]}`
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
    .subscribe((youTubeSearch: YouTubeSearchModel[]) => {
      this.searches = youTubeSearch
    })
  }

  showDetails(item): void {
    if (this.isLoading(item)) {
      let toast = new Toast('Aguarde concluir a busca',
                          new ToastType().info)
                        this.store.dispatch(new showToast(toast))
    } else {
      this.details = item
    }
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

  closeDetails(): void {
    this.details = null
  }

  isConcluded(item) {
    return item.daysLong > 0
  }

  isLoading(item) {
    return item.daysLong === 0
  }

  formatDaysLong(daysLong) {
    return daysLong ? `${daysLong} dias` : ''
  }
}
