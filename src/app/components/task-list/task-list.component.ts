import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Tarea } from 'src/app/models/tarea';
import { TaskService } from 'src/app/services/TaskService.service';
import { AddTaskComponentComponent } from '../add-task-component/add-task-component.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  constructor(private taskService: TaskService, public dialog: MatDialog) {}
  public taskList: Tarea[] = [];
  public displayedColumns: string[] = [
    'Titulo',
    'Descripcion',
    'Completada',
    'Eliminar',
  ];

  ngOnInit(): void {
    this.getTasks();
  }
  getTasks(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.taskList = tasks));
  }
  addTask(): void {
    const config: MatDialogConfig = { width: '50%' };
    const dialogRef = this.dialog.open(AddTaskComponentComponent, config);
    dialogRef.afterClosed().subscribe((result) => {
      if (result != undefined)
        this.taskService
          .addTask(result)
          .subscribe((tasks) => (this.taskList = tasks));
    });
  }
  completeTask(task: Tarea): void {
    this.taskService
      .completeTask(task)
      .subscribe((tasks) => (this.taskList = tasks));
  }
  deleteTask(task: Tarea): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result)
        this.taskService
          .deleteTask(task)
          .subscribe((tasks) => (this.taskList = tasks));
    });
  }
}
