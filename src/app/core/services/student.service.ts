import { Injectable, signal } from "@angular/core";
import { Student } from "../models/student.model";
import { HttpStudentService } from "./http-student.service";

@Injectable({ providedIn: 'root' })
export class StudentFacadeService {
  student = signal<Student | null>(null);
  loading = signal(false);
  error = signal<string | null>(null);
  students = signal<Student[]>([]);
  constructor(private HttpStudentStudent: HttpStudentService) {}

  loadAll() {
    this.loading.set(true);
    this.HttpStudentStudent.getAll().subscribe({
      next: (list) => this.students.set(list),
      error: () => this.error.set("error"),
      complete: () => this.loading.set(false)
    });
  }

  loadSchedule(id: string) {
    this.loading.set(true);
    this.HttpStudentStudent.fetchSchedule({ id }).subscribe({
        next: ({ student }) => this.student.set(student),
        error: () => this.error.set("error"),
        complete: () => this.loading.set(false)
      });
  }

}
