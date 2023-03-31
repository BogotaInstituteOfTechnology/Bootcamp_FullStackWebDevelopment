import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChecklistComponent } from './checklist/component/checklist.component';
import { CreateTaskComponent } from './create-task/component/create-task.component';
import { AuthGuard } from 'src/app/core/security/guards/auth.guard';

const routes: Routes = [
  {
    path: 'checkList',
    component: ChecklistComponent,
    children: [
      {
        path: 'checkList',
        component: ChecklistComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'createTask',
        component: CreateTaskComponent,
        canActivate: [AuthGuard],
      },
    ],
    canActivate: [AuthGuard],
  },
  {
    path: 'createTask',
    component: CreateTaskComponent,
    children: [
      {
        path: 'checkList',
        component: ChecklistComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'createTask',
        component: CreateTaskComponent,
        canActivate: [AuthGuard],
      },
    ],
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoardRoutingModule {}
