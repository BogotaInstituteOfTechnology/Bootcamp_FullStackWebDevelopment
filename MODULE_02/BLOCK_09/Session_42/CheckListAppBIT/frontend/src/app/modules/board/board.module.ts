import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { ChecklistComponent } from './checklist/component/checklist.component';
import { CreateTaskComponent } from './create-task/component/create-task.component';


@NgModule({
  declarations: [
    ChecklistComponent,
    CreateTaskComponent
  ],
  imports: [
    CommonModule,
    BoardRoutingModule
  ]
})
export class BoardModule { }
