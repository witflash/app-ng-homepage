import { Injectable } from '@angular/core';
import { Link } from './link';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  allLinks: Link[] = [];

  constructor() {}
}
