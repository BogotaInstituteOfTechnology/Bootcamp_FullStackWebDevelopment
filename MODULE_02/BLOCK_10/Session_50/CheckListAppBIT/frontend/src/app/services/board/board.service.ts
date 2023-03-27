import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  private APP: string;

  constructor(private _http: HttpClient) {
    this.APP = environment.APP;
  }

  createTask(task: any) {
    return this._http.post<any>(this.APP + 'board/createTask', task);
  }

  listTaks() {
    return this._http.get<any>(this.APP + 'board/listTask');
  }

  deleteTask(task: any) {
    return this._http.delete<any>(this.APP + 'board/deleteTask/' + task._id);
  }

  updateTask(task: any) {
    return this._http.put<any>(this.APP + 'board/updateTask', task);
  }
}
