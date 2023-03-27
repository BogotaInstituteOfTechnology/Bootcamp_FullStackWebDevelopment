import { Component } from '@angular/core';
import { BoardService } from '../../../../services/board/board.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent {
  createTaskData = {
    name: '',
    description: '',
  };
  selectedFile: any;

  constructor(private _taskService: BoardService, private _router: Router) {}

  onFileSelected(event: any) {
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
  }

  createTask() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    fd.append('name', this.createTaskData.name);
    fd.append('description', this.createTaskData.description);
    this._taskService.createTask(fd).subscribe({
      next: () => {
        this._router.navigate(['/checkList']);
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
