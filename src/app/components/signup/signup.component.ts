import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './../../services/users/user.service';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  private user: User;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  signup(event: any) {
    this.user = event;
    this.userService.createUser(this.user).subscribe((res) => {
      this.router.navigate(['dashboard']);
    });
  }
}
