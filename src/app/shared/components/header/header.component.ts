import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../services/auth/auth.service';
import { UserService } from '../../../services/users/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public titleApp: String = 'TicketsApp';
  public titleLink: String = '/';
  public profile: User;

  constructor(private auth: AuthService, private userService: UserService, private router: Router) { }

  ngOnInit() {
    if (this.auth.loggedIn()) {
      this.titleLink = '/dashboard';
    } else {
      this.titleLink = '/';
    }

    if (this.auth.loggedIn()) {
      this.userService.getProfile().subscribe((res) => {
        this.profile = res.user;
      });
    }
  }

  isLogged() {
    return this.auth.loggedIn();
  }

  onLogout() {
    this.userService.logoutUser().subscribe((res) => {
      this.router.navigate(['login']);
    });
  }
}
