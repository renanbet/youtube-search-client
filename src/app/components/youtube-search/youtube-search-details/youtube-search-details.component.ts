import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';
import { YouTubeSearchModel } from 'src/app/models/youtube-search.model';
import { VideoModel } from 'src/app/models/video.model';
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
  @Output() close = new EventEmitter();
  @Input() details: YouTubeSearchModel

  public loading = false
  public title = ''
  public videos = []

  constructor(
    private videoService: VideoService,
    private store:Store) { }

  ngOnInit(): void {
    this.title = this.details.text
    this.videoService.getVideos(this.details._id)
    .subscribe((videos: VideoModel[]) => {
      this.videos = videos
    })
    console.log(this.details)
  }

  getTopWords() {
    return this.details.words.map(item => {
      return item[0]
    }).join(', ')
  }

  back () {
    this.close.next()
  }

  isAdmin() {
    let user = JSON.parse(localStorage.getItem('user'))
    return user.role === 'admin'
  }

  getTotalMinutes() {
    return this.videos.map(item => {
      return item.minutes
    }).reduce((a, b) => {
      return a + b
    }, 0)
  }

  formatTitle(title) {
    if (!title)
      return ''
    return title.length <= 50 ? title : `${title.substring(0, 50)}...`
  }
}
