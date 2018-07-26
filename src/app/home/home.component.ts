import { Component, OnInit } from '@angular/core';
import { Link } from '../link';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [DataService],
})
export class HomeComponent implements OnInit {
  allLinks: Link[] = [];
  newLink: Link = new Link();

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getAllLinks()
      .subscribe(links => {this.allLinks = links});
  }

  addLink() {
    this.data.addLink(this.newLink)
      .subscribe(link => { this.allLinks.push(link) });
    this.newLink = new Link();
    }

  getAllLinks() {
    this.data.getAllLinks()
      .subscribe(links => this.allLinks = links);
  }
}
