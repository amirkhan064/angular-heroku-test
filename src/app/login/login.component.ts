import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '../shared/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginPassword = '';
  invalidPassword = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    if(this.loginPassword === Constants.loginPassword ) {
      this.invalidPassword = false;
      this.router.navigate(['/list']);
    } else {
      this.invalidPassword = true;
    }
  }

}
