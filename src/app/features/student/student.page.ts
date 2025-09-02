import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { StudentFacadeService } from '../../core/services/student.service';

@Component({
  selector: 'app-student',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './student.page.html',
  styleUrl: './student.page.scss'
})
export class StudentPage implements OnInit, OnDestroy {
id = '';

  constructor(
    private router: Router,
    public studentFacadeService: StudentFacadeService
  ) {}

  ngOnInit() {
    this.studentFacadeService.loadAll();
  }

  go() {
    if (!this.id){
      this.studentFacadeService.error.set('');
      return;
    }
      
    if(!this.studentFacadeService.students().some(student => student.id === this.id )){
       this.studentFacadeService.error.set('Student not found');
    return;
    }
    this.router.navigate(['/timetable', this.id]);
  }

  ngOnDestroy(): void {
    this.studentFacadeService.error.set(''); 
  }
}
