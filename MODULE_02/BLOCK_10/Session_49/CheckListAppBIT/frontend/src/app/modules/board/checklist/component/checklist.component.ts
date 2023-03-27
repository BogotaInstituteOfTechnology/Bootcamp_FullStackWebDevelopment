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

  updateTask(task: any, status: string) {}
  deleteTask(task: any) {}
}
