import { Injectable } from '@angular/core';
import { Link } from './link';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataLinkService {
  public allLinks: Link[] = [];
  newLink: Link = new Link();

  constructor(private api: ApiService) {}

  getAllLinks() {
    return this.allLinks;
  }

  public updateAllLinks() {
    this.api.getAllLinks().subscribe(links => {
      this.allLinks = links;
    });
  }

  // getAllLinks(): Observable<Link[]> {
  //   return this.api.getAllLinks();
  // }

  addLink(newLink: Link): Observable<Link> {
    return this.api.addLink(newLink);
  }

  removeLink(linkId: number): Observable<Link> {
    return this.api.removeLink(linkId);
  }
}
