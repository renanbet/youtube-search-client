import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { YouTubeSearchService } from 'src/app/services/youtube-search.service';
import { YouTubeSearch } from 'src/app/models/youtube-search.model';
import { Store } from '@ngrx/store';
import { showToast } from 'src/app/reducers/utilities';
import { Toast } from 'src/app/models/toast.model'
import { ToastType } from 'src/app/models/toast-type.model';

@Component({
  selector: 'app-youtube-search-details',
  templateUrl: './youtube-search-details.component.html',
  styleUrls: ['./youtube-search-details.component.scss']
})
export class YouTubeSearchDetailsComponent implements OnInit {
  @Output() close = new EventEmitter<boolean>();
  @Input() details: YouTubeSearch

  public loading = false
  public title = 'Busca'

  constructor(
    private youTubeSearchService: YouTubeSearchService,
    private store:Store) { }

  ngOnInit(): void {}

  back () {
    this.close.next(false)
  }

  isAdmin() {
    let user = JSON.parse(localStorage.getItem('user'))
    return user.role === 'admin'
  }

  remove() {
    
  }
}
