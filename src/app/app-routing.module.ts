import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { YouTubeSearchComponent } from './components/youtube-search/youtube-search.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'youtubesearch', component: YouTubeSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
