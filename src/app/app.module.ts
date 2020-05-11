import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { YouTubeSearchComponent } from './components/youtube-search/youtube-search.component';
import { YouTubeSearchDetailsComponent } from './components/youtube-search/youtube-search-details/youtube-search-details.component';

import { LoginService } from './services/login.service'
import { YouTubeSearchService } from './services/youtube-search.service'
import { ScheduleService } from './services/schedule.service'

import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { reducer as searchReducer } from './reducers/search'
import { reducer as utilitiesReducer } from './reducers/utilities'

import { environment } from 'src/environments/environment';
import { ToastComponent } from './components/toast/toast.component';
import { ScheduleComponent } from './components/schedule/schedule.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    YouTubeSearchComponent,
    LoginComponent,
    YouTubeSearchDetailsComponent,
    ToastComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forRoot({
      searchReducer,
      utilitiesReducer
    })
  ],
  providers: [LoginService, YouTubeSearchService, ScheduleService,
  { provide: 'API_URL', useValue: environment.apiUrl }],
  bootstrap: [AppComponent]
})
export class AppModule { }
