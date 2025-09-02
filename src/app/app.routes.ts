import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'students', loadComponent: () => import('./features/student/student.page').then(m => m.StudentPage) },

    { path: 'timetable/:id', loadComponent: () => import('./features/timetable/timetable.page').then(m => m.TimetablePage) },

    { path: '', redirectTo: 'students', pathMatch: 'full' }
];
