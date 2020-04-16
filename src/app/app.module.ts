import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import {LoginService} from './login.service';
import { HomeComponent } from './home/home.component';
import {UserLogService} from './user-log.service';
import { CreateLogComponent } from './create-log/create-log.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    HomeComponent,
    CreateLogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent},
      { path: 'login', component: LoginComponent},
      { path: 'home', component: HomeComponent},
    ])
  ],
  providers: [LoginService, UserLogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
