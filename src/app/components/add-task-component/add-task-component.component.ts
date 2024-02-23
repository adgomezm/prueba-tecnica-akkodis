import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Tarea } from 'src/app/models/tarea';
import { TaskService } from 'src/app/services/TaskService.service';

@Component({
  selector: 'app-add-task-component',
  templateUrl: './add-task-component.component.html',
  styleUrls: ['./add-task-component.component.scss'],
})
export class AddTaskComponentComponent implements OnInit {
  constructor(
    private taskService: TaskService,
    private ref: MatDialogRef<AddTaskComponentComponent>
  ) {}
  public form = new FormGroup({
    titulo: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
  });
  ngOnInit(): void {}
  addTask(): Tarea {
    const tarea: Tarea = {
      Id: this.taskService.tasks[this.taskService.tasks.length - 1].Id + 1,
      Titulo: this.form.controls['titulo'].value,
      Descripcion: this.form.controls['descripcion'].value,
      Completada: false,
    };

    this.ref.close(tarea);
    return tarea;
  }
}
