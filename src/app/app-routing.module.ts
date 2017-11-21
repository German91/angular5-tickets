import { AdminGuard } from './guards/admin.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { TicketsListComponent } from './components/tickets/tickets-list/tickets-list.component';
import { AuthGuard } from './guards/auth.guard';
import { TicketsCreateComponent } from './components/tickets/tickets-create/tickets-create.component';
import { TicketsDetailsComponent } from './components/tickets/tickets-details/tickets-details.component';
import { AdminTicketsComponent } from './components/admin/admin-tickets/admin-tickets.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: TicketsListComponent, canActivate: [AuthGuard] },
  { path: 'tickets/create', component: TicketsCreateComponent, canActivate: [AuthGuard] },
  { path: 'tickets/:id', component: TicketsDetailsComponent, canActivate: [AuthGuard] },
  { path: 'admin/tickets', component: AdminTicketsComponent, canActivate: [AdminGuard] },
  { path: 'admin', redirectTo: 'admin/tickets', pathMatch: 'full' },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
