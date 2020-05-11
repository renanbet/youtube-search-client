import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ScheduleComponent } from './schedule.component';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { environment } from './../../../environments/environment'

describe('ScheduleComponent', () => {
  let component: ScheduleComponent;
  let fixture: ComponentFixture<ScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleComponent ],
      imports: [ 
        HttpClientTestingModule
      ],
      providers: [
        { provide: 'API_URL', useValue: environment.apiUrl } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have back method', () => {
    expect(component.back).toBeTruthy();
  });

  it('should have save method', () => {
    expect(component.save).toBeTruthy();
  });

  it('should have back button', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.button > span > i')).toHaveClass('fa-arrow-left');
  });

  it('should have add button', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.button.is-danger > span > i')).toHaveClass('fa-check');
  });

  it('should have title', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.header-title').innerHTML).toMatch('Agenda');
  });
  
  it('should have sunday input', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.input.sunday').placeholder).toMatch('Tempo em minutos');
  });

  it('should have monday input', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.input.monday').placeholder).toMatch('Tempo em minutos');
  });
  
  it('should have tuesday input', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.input.tuesday').placeholder).toMatch('Tempo em minutos');
  });

  it('should have wednesday input', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.input.wednesday').placeholder).toMatch('Tempo em minutos');
  });

  it('should have thursday input', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.input.thursday').placeholder).toMatch('Tempo em minutos');
  });

  it('should have friday input', () => {
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.input.friday').placeholder).toMatch('Tempo em minutos');
  });
});
