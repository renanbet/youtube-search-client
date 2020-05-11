import { HttpClientTestingModule } from '@angular/common/http/testing';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { YouTubeSearchDetailsComponent } from './youtube-search-details.component';

import { environment } from '../../../../environments/environment';

describe('YouTubeSearchDetailsComponent', () => {
  let component: YouTubeSearchDetailsComponent;
  let fixture: ComponentFixture<YouTubeSearchDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouTubeSearchDetailsComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ { provide: 'API_URL', useValue: environment.apiUrl } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouTubeSearchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have back method', () => {
    expect(component.back).toBeTruthy();
  });

  it('should have isAdmin method', () => {
    expect(component.isAdmin).toBeTruthy();
  });
});
