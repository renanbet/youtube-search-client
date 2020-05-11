import { TestBed } from '@angular/core/testing';
import { ScheduleService } from './schedule.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment'

describe('ScheduleService', () => {
  let service: ScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ { provide: 'API_URL', useValue: environment.apiUrl } ]
    });
    service = TestBed.inject(ScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should have getHeaders method', () => {
    expect(service.getHeaders).toBeTruthy();
  });

  it('should have getSchedule method', () => {
    expect(service.getSchedule).toBeTruthy();
  });

  it('should have insert method', () => {
    expect(service.insert).toBeTruthy();
  });

  it('should have error method', () => {
    expect(service.error).toBeTruthy();
  });
});
