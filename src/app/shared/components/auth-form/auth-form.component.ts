import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {
  public buttonText: String = '';

  @Output() onSubmit = new EventEmitter<any>();

  constructor(private router: Router) { }

  ngOnInit() {
    if (this.router.url === '/login') {
      this.buttonText = 'Login';
    } else if (this.router.url === '/signup') {
      this.buttonText = 'Sign Up';
    }
  }

  handleSubmit(form: NgForm) {
    this.onSubmit.emit(form.value);
  }
}
