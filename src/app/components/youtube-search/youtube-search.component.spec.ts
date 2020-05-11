import {
  RouterTestingModule
} from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component } from '@angular/core';
import { provideRoutes, Routes, RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { reducer as searchReducer } from './../../reducers/search';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { YouTubeSearchComponent } from './youtube-search.component';
import { environment } from './../../../environments/environment'

@Component({})
class TestRouterComponent {}
let config: Routes = [
  {
      path: '', component: TestRouterComponent
  }
];

describe('YouTubeSearchComponent', () => {
  let component: YouTubeSearchComponent;
  let fixture: ComponentFixture<YouTubeSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        YouTubeSearchComponent,
        TestRouterComponent
      ],
      imports: [ RouterTestingModule,
        RouterModule,
        HttpClientTestingModule,
        StoreModule.forRoot({
          searchReducer
        }) ],
      providers: [ { provide: 'API_URL', useValue: environment.apiUrl } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouTubeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have load method', () => {
    expect(component.load).toBeTruthy();
  });

  it('should have showDetails method', () => {
    expect(component.showDetails).toBeTruthy();
  });

  it('should have closeDetails method', () => {
    expect(component.closeDetails).toBeTruthy();
  });
});
