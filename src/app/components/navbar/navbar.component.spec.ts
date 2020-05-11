import {
  RouterTestingModule
} from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component } from '@angular/core';
import { provideRoutes, Routes, RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { reducer as searchReducer } from 'src/app/reducers/search'

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

@Component({})
class TestRouterComponent {
}
let config: Routes = [
  {
      path: '', component: TestRouterComponent
  }
];

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent,
        TestRouterComponent
      ],
      imports: [ 
        RouterTestingModule,
        RouterModule,
        HttpClientTestingModule,
        StoreModule.forRoot({
          searchReducer
        }) ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have toggleMenu method', () => {
    expect(component.toggleMenu).toBeTruthy();
  });

  it('should have logout method', () => {
    expect(component.logout).toBeTruthy();
  });

  it('should have globalSearch method', () => {
    expect(component.globalSearch).toBeTruthy();
  });

  it('should have menu button', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.button > span > i')).toHaveClass('fa-bars');
  });

  it('should have title', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.navbar-title').innerHTML).toMatch('YouTube Search');
  });
});
