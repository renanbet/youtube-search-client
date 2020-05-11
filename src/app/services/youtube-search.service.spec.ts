import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';

import { YouTubeSearchService } from './youtube-search.service';
import { environment } from '../../environments/environment'

describe('YouTubeSearchService', () => {
  let service: YouTubeSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ { provide: 'API_URL', useValue: environment.apiUrl } ]
    });
    service = TestBed.inject(YouTubeSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getHeaders method', () => {
    expect(service.getHeaders).toBeTruthy();
  });

  it('should have getSearches method', () => {
    expect(service.getSearches).toBeTruthy();
  });

  it('should have insert method', () => {
    expect(service.insert).toBeTruthy();
  });
  
  it('should have remove method', () => {
    expect(service.remove).toBeTruthy();
  });

  it('should have error method', () => {
    expect(service.error).toBeTruthy();
  });
});
