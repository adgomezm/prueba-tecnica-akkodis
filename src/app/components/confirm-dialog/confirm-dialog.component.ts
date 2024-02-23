import { Component, OnInit } from '@angular/core';
import { AddTaskComponentComponent } from '../add-task-component/add-task-component.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
})
export class ConfirmDialogComponent implements OnInit {
  constructor(private ref: MatDialogRef<AddTaskComponentComponent>) {}

  ngOnInit(): void {}
}
