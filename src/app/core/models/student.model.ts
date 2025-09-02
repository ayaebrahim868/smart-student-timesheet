import { Observable } from "rxjs";

export interface ClassSlot {
  course: string;
  day: string;
  start: string;
  end: string;   
  room: string;
}

export interface Student {
  id: string;
  name: string;
  classes: ClassSlot[];
}

export interface ScheduleRequest {
  id: string;
}

export interface ScheduleResponse {
  student: Student | null;
}
export interface StudentDataStrategy {
  fetchSchedule(req: ScheduleRequest): Observable<ScheduleResponse>;
}