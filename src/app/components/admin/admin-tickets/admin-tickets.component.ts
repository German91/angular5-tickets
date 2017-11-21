import { Component, OnInit } from '@angular/core';

import { TicketService } from './../../../services/tickets/ticket.service';
import { Ticket } from '../../../shared/models/ticket';

@Component({
  selector: 'app-admin-tickets',
  templateUrl: './admin-tickets.component.html',
  styleUrls: ['./admin-tickets.component.scss']
})
export class AdminTicketsComponent implements OnInit {
  public tickets: Array<Ticket> = [];

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    this.ticketService.getAllTickets().subscribe((res) => {
      this.tickets = res.tickets;
    });
  }

  onRemove(id: string) {
    this.ticketService.removeTicket(id).subscribe(() => {
      this.ticketService.getAllTickets().subscribe((res) => {
        this.tickets = res.tickets;
      });
    });
  }
}
