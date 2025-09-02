import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ScheduleRequest, ScheduleResponse, Student, StudentDataStrategy } from '../models/student.model';


@Injectable({ providedIn: 'root' })
export class HttpStudentService implements StudentDataStrategy {
    private baseUrl = environment.apiBaseUrl;
    constructor(private http: HttpClient) { }

    getAll(): Observable<Student[]> {
        return this.http.get<Student[]>(`${this.baseUrl}/api/students`);
    }

    fetchSchedule(req: ScheduleRequest): Observable<ScheduleResponse> {
        return this.http
            .post<Student | null>(`${this.baseUrl}/api/schedule`, req)
            .pipe(
                map(student => ({ student }))
            );
    }
}
