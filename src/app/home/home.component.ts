import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Link } from '../link';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  newLink: Link = new Link();
  allLinks: Link[] = [];

  test: string = '';

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getAllLinks().subscribe(allLinks => {
      this.allLinks = allLinks;
    });
  }

  getAllLinks() {
    console.log(this.allLinks);
  }

  addLink() {
    console.log(this.newLink);
    return this.api.addLink(this.newLink);
  }
}
