import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  password() {
    this.route.navigate(['/forgotpassword'])
  }

  
  public inputType: string = 'password';
  showpassword(event: any) {
    if (event.target.checked) {
      this.inputType = 'text';
    }
    else {
      this.inputType = 'password';
    }
  }

}
