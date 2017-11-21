import { AdminGuard } from './guards/admin.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { AuthService } from './services/auth/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { AuthFormComponent } from './shared/components/auth-form/auth-form.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserService } from './services/users/user.service';
import { TicketsListComponent } from './components/tickets/tickets-list/tickets-list.component';
import { TicketsCreateComponent } from './components/tickets/tickets-create/tickets-create.component';
import { TicketService } from './services/tickets/ticket.service';
import { TicketItemComponent } from './components/tickets/ticket-item/ticket-item.component';
import { TicketsDetailsComponent } from './components/tickets/tickets-details/tickets-details.component';
import { AdminTicketsComponent } from './components/admin/admin-tickets/admin-tickets.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    AuthFormComponent,
    SignupComponent,
    TicketsListComponent,
    TicketsCreateComponent,
    TicketItemComponent,
    TicketsDetailsComponent,
    AdminTicketsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    AuthModule
  ],
  providers: [
    AuthService,
    UserService,
    TicketService,
    AuthGuard,
    AdminGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
