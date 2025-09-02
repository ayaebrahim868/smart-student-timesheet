import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { StudentService } from '../../core/services/student.service';

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
    public StudentService: StudentService
  ) {}

  ngOnInit() {
    this.StudentService.loadAll();
  }

  go() {
    if (!this.id){
      this.StudentService.error.set('');
      return;
    }
      
    if(!this.StudentService.students().some(student => student.id === this.id )){
       this.StudentService.error.set('Student not found');
    return;
    }
    this.router.navigate(['/timetable', this.id]);
  }

  ngOnDestroy(): void {
    this.StudentService.error.set(''); 
  }
}
