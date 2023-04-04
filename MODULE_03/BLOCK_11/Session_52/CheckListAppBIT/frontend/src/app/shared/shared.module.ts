import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material modules for AlertComponent
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackbarComponent } from './components/snackbar.component';

@NgModule({
  declarations: [SnackbarComponent],
  imports: [CommonModule, MatSnackBarModule],
  exports: [SnackbarComponent],
})
export class SharedModule {}
