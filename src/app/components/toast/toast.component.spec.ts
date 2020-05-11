import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastComponent } from './toast.component';

import { StoreModule } from '@ngrx/store';
import { reducer as utilitiesReducer } from 'src/app/reducers/utilities'

describe('ToastComponent', () => {
  let component: ToastComponent;
  let fixture: ComponentFixture<ToastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastComponent ],
      imports: [
        StoreModule.forRoot({
          utilitiesReducer
        }) ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have showToast method', () => {
    expect(component.showToast).toBeTruthy();
  });

  it('should have hideToast method', () => {
    expect(component.hideToast).toBeTruthy();
  });

  it('should have getClass method', () => {
    expect(component.getClass).toBeTruthy();
  });

  it('should have close method', () => {
    expect(component.close).toBeTruthy();
  });

});
