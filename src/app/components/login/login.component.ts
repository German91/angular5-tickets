import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../shared/models/user';
import { UserService } from '../../services/users/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private user: User;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  login(event: any) {
    this.user = event;
    this.userService.loginUser(this.user).subscribe((res) => {
      this.router.navigate(['dashboard']);
    });
  }
}
