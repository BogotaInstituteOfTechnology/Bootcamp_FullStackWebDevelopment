import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChecklistComponent } from './checklist/component/checklist.component';
import { CreateTaskComponent } from './create-task/component/create-task.component';

const routes: Routes = [
  {
    path: 'checkList',
    component: ChecklistComponent,
    children: [
      {
        path: 'checkList',
        component: ChecklistComponent,
      },
      {
        path: 'createTask',
        component: CreateTaskComponent,
      },
    ],
  },
  {
    path: 'createTask',
    component: CreateTaskComponent,
    children: [
      {
        path: 'checkList',
        component: ChecklistComponent,
      },
      {
        path: 'createTask',
        component: CreateTaskComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoardRoutingModule {}
