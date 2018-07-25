import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Link } from '../link';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  newLink: Link = new Link();
  allLinks: Link[] = [];

  constructor(private api: ApiService, private http: HttpClient) {}

  ngOnInit() {
    this.getAllLinks();
  }

  getAllLinks() {
    this.api.getAllLinks().subscribe(allLinks => {
      this.allLinks = allLinks;
    });
    console.log('this.allLinks: ', this.allLinks);
  }

  addLink() {
    this.api.addLink(this.newLink).subscribe(link => {
      this.allLinks.push(link);
    });
      this.newLink = new Link();
    }
}
