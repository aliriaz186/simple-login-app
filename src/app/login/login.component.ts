import { Component, OnInit } from '@angular/core';
import {Login} from '../models/login';
import {LoginService} from '../login.service';
import {CustomResponse} from '../models/custom-response';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public login;
  public loginError;
  constructor(private loginService: LoginService, private router: Router) {
    this.login = new Login();
  }

  ngOnInit(): void {
  }

  userLogin(){
    this.loginError = false;
    if (!this.login.validate()){
      this.loginError = true;
      return;
    }
    this.loginService.login(this.login).subscribe((data: CustomResponse) => {
      console.log(data);
      if (data.token){
        localStorage.setItem('token', data.token);
        this.router.navigate(['home']);
      }else{
        this.loginError = true;
      }
    });
  }
}
