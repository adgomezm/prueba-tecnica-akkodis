import { Observable, of } from 'rxjs';
import { Tarea } from '../models/tarea';
import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class TaskService {
  tasks: Tarea[] = [
    {
      Id: 1,
      Titulo: 'Tarea 1',
      Descripcion: 'Descripción de tarea',
      Completada: true,
    },
    {
      Id: 2,
      Titulo: 'Tarea 2',
      Descripcion: 'Descripción de tarea',
      Completada: false,
    },
    {
      Id: 3,
      Titulo: 'Tarea 3',
      Descripcion: 'Descripción de tarea',
      Completada: false,
    },
  ];

  constructor() {}

  getTasks(): Observable<Tarea[]> {
    return of(this.tasks);
  }
  addTask(task: Tarea): Observable<Tarea[]> {
    this.tasks.push(task);
    return of(this.tasks);
  }
  completeTask(task: Tarea): Observable<Tarea[]> {
    this.tasks.find((t) => t.Id == task.Id).Completada = !this.tasks.find(
      (t) => t.Id == task.Id
    ).Completada;
    return of(this.tasks);
  }
  deleteTask(task: Tarea): Observable<Tarea[]> {
    this.tasks = this.tasks.filter((t) => t.Id != task.Id);
    return of(this.tasks);
  }
}
