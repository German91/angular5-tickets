import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { Http } from '@angular/http';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: (http) => {
        return new AuthHttp(new AuthConfig({ noTokenScheme: true }), http);
      },
      deps: [Http]
    }
  ],
  declarations: []
})
export class AuthModule { }
