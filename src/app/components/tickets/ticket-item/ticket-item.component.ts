import { Component, OnInit, Input } from '@angular/core';

import { Ticket } from '../../../shared/models/ticket';

@Component({
  selector: 'app-ticket-item',
  templateUrl: './ticket-item.component.html',
  styleUrls: ['./ticket-item.component.scss']
})
export class TicketItemComponent implements OnInit {
  @Input() public ticket: Ticket;

  constructor() { }

  ngOnInit() {
  }

  statusClass() {
    switch (this.ticket.status) {
      case 'open':
        return 'badge-success';
      case 'review':
        return 'badge-warning';
      case 'closed':
        return 'badge-danger';
      default:
        return 'badge-secondary';
    }
  }
}
