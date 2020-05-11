import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ScheduleModel } from 'src/app/models/schedule.model';
import { ScheduleService } from 'src/app/services/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  @Output() close = new EventEmitter<ScheduleModel>()
  @Input() currentSchedule:ScheduleModel
  public schedule: ScheduleModel = {
    _id: '',
    sunday: null,
    monday: null,
    tuesday: null,
    wednesday: null,
    thursday: null,
    friday: null,
    saturday: null
  }

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit(): void {
    if (this.currentSchedule) {
      this.schedule = this.currentSchedule
    }
  }

  back() {
    this.close.next(null)
  }

  save(): void {
    this.scheduleService.insert(this.schedule).subscribe((data) => {
      this.close.next(data)
    });
  }
}
