import { TestBed } from '@angular/core/testing';
import { VideoService } from './video.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment'

describe('VideoService', () => {
  let service: VideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ { provide: 'API_URL', useValue: environment.apiUrl } ]
    });
    service = TestBed.inject(VideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getHeaders method', () => {
    expect(service.getHeaders).toBeTruthy();
  });

  it('should have getVideos method', () => {
    expect(service.getVideos).toBeTruthy();
  });

  it('should have error method', () => {
    expect(service.error).toBeTruthy();
  });
});
