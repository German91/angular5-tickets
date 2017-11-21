import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { TicketService } from '../../../services/tickets/ticket.service';
import { Ticket } from './../../../shared/models/ticket';

@Component({
  selector: 'app-tickets-details',
  templateUrl: './tickets-details.component.html',
  styleUrls: ['./tickets-details.component.scss']
})
export class TicketsDetailsComponent implements OnInit, OnDestroy {
  private id: string;
  private sub: any;
  public ticket: Ticket;

  constructor(private route: ActivatedRoute, private ticketService: TicketService) {
    this.ticket = { _id: '', title: '', description: '', status: '', created_at: '', user: {} };
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => this.id = params['id']);
    this.ticketService.getTicket(this.id).subscribe((res) => {
      this.ticket = res.ticket;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  handleSubmit(form: NgForm) {
    const ticket: Ticket = form.value;
    this.ticketService.updateTicket(ticket, this.id).subscribe((res) => {});
  }
}
