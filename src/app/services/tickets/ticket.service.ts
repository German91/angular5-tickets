import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { AuthService } from './../auth/auth.service';
import { Ticket } from '../../shared/models/ticket';

@Injectable()
export class TicketService {
  private api_url = 'http://localhost:8000/api/v1/tickets';

  constructor(private authHttp: AuthHttp, private auth: AuthService) { }

  createTicket(ticket: Ticket): Observable<any> {
    return this.authHttp.post(this.api_url, ticket).map(res => {
      const response = res.json();
      return response;
    });
  }

  getTickets(): Observable<any> {
    return this.authHttp.get(this.api_url).map(res => {
      const response = res.json();
      return response;
    });
  }

  getTicket(id: string): Observable<any> {
    return this.authHttp.get(`${this.api_url}/${id}`).map(res => {
      const response = res.json();
      return response;
    });
  }

  getAllTickets(): Observable<any> {
    return this.authHttp.get(`${this.api_url}/all`).map(res => {
      const response = res.json();
      return response;
    });
  }

  updateTicket(ticket: Ticket, id: string): Observable<any> {
    return this.authHttp.patch(`${this.api_url}/${id}`, ticket).map(res => {
      const response = res.json();
      return response;
    });
  }

  removeTicket(id: string): Observable<any> {
    return this.authHttp.delete(`${this.api_url}/${id}`).map(res => {
      const response = res.json();
      return response;
    });
  }

  private handleError(error: Response | any) {
    console.error('GameService:handleError', error);
    return Observable.throw(error);
  }
}
