import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../environments/environment';
import { Link } from './link';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getAllLinks(): Observable<Link[]> {
    return this.http.get<Link[]>(API_URL + '/links').pipe(catchError(this.handleError));
  }

  public addLink(link: Link): Observable<Link> {
    console.log('link: ', link);
    return this.http.post<Link>(API_URL + '/links', link);
  }

  private handleError(error: HttpErrorResponse) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
