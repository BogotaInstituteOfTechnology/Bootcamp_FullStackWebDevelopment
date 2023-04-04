import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { ChecklistComponent } from './checklist/component/checklist.component';
import { CreateTaskComponent } from './create-task/component/create-task.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ChecklistComponent, CreateTaskComponent],
  imports: [
    CommonModule,
    BoardRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    MatExpansionModule,
    MatIconModule,
    SharedModule,
  ],
})
export class BoardModule {}
