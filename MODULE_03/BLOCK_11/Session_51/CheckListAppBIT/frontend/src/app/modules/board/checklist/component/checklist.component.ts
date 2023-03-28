import { Component } from '@angular/core';
import { BoardService } from '../../../../services/board/board.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss'],
})
export class ChecklistComponent {
  checkList: any = [];

  constructor(private _taskService: BoardService, private _router: Router) {}

  ngOnInit() {
    this._taskService.listTaks().subscribe({
      next: (v) => {
        this.checkList = v;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  updateTask(task: any, status: string) {
    const temporalStatus = task.status;
    task.status = status;
    this._taskService.updateTask(task).subscribe({
      next: (v) => {
        task.status = status;
      },
      error: (e) => {
        task.status = temporalStatus;
        console.log(e);
      },
    });
  }

  deleteTask(task: any) {
    this._taskService.deleteTask(task).subscribe({
      next: (v) => {
        const index = this.checkList.indexOf(task);
        if (index > -1) {
          this.checkList.splice(index, 1);
        }
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
