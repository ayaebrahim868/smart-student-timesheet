import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StudentService } from '../../core/services/student.service';
import { TimeRangePipe } from '../../shared/pipes/time-range.pipe';
import { hhmmToMinutes, isTodayCode } from '../../shared/utils/time.utils';

@Component({
  selector: 'app-timetable',
  standalone: true,
  imports: [CommonModule, RouterModule, TimeRangePipe],
  templateUrl: './timetable.page.html',
  styleUrl: './timetable.page.scss'
})
export class TimetablePage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    public StudentService: StudentService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.StudentService.loadSchedule(id);
  }

  isCurrent(c: any) {
    const now = new Date();
    if (!isTodayCode(c.day, now)) return false;
    const m = now.getHours() * 60 + now.getMinutes();
    return m >= hhmmToMinutes(c.start) && m <= hhmmToMinutes(c.end);
  }

  isNext(c: any) {
    const now = new Date();
    if (!isTodayCode(c.day, now)) return false;
    const m = now.getHours() * 60 + now.getMinutes();
    return m < hhmmToMinutes(c.start);
  }
}
