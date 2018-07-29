import { Injectable } from '@angular/core';
import { Link } from './link';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private api: ApiService) { }
  newLink: Link = new Link();

  getAllLinks(): Observable<Link[]> {
    return this.api.getAllLinks();
  }

  addLink(newLink: Link): Observable<Link> {
    return this.api.addLink(newLink);
    }

  removeLink(linkId: number): Observable<Link> {
    return this.api.removeLink(linkId);
  }
}
