import { Component, OnInit } from '@angular/core';

import { TicketService } from './../../../services/tickets/ticket.service';
import { Ticket } from './../../../shared/models/ticket';

@Component({
  selector: 'app-tickets-list',
  templateUrl: './tickets-list.component.html',
  styleUrls: ['./tickets-list.component.scss']
})
export class TicketsListComponent implements OnInit {
  public tickets: Array<Ticket> = [];

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    this.ticketService.getTickets().subscribe((res) => {
      this.tickets = res.tickets;
    });
  }

}
