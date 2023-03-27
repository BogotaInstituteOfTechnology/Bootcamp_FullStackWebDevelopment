import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './modules/user/user.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BoardModule } from './modules/board/board.module';
import { AuthModule } from './modules/auth/auth.module';
import { HeaderModule } from './modules/header/header.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, UserModule, BrowserAnimationsModule, BoardModule, AuthModule, HeaderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
