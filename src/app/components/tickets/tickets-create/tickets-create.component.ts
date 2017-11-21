import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Ticket } from './../../../shared/models/ticket';
import { TicketService } from './../../../services/tickets/ticket.service';

@Component({
  selector: 'app-tickets-create',
  templateUrl: './tickets-create.component.html',
  styleUrls: ['./tickets-create.component.scss']
})
export class TicketsCreateComponent implements OnInit {
  private ticket: Ticket;

  constructor(private ticketService: TicketService, private router: Router) { }

  ngOnInit() {
  }

  handleSubmit(form: NgForm) {
    this.ticket = form.value;
    this.ticketService.createTicket(this.ticket).subscribe((res) => {
      this.router.navigate(['dashboard']);
    });
  }
}
