import { Component, OnInit } from '@angular/core';
import { Link } from '../link';
import { DataLinkService } from '../data-link.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [DataLinkService],
})
export class HomeComponent implements OnInit {
  allLinks: Link[] = [];
  newLink: Link = new Link();

  constructor(private data: DataLinkService) {}

  ngOnInit() {
    this.getAllLinks();
  }

  getAllLinks() {
    this.allLinks = this.data.getAllLinks();
    console.log('this.data.allLinks: ', this.data.allLinks);
  }
  // getAllLinks() {
  //   this.data.getAllLinks().subscribe(links => {
  //     this.allLinks = links;
  //   });
  // }

  addLink() {
    this.data.addLink(this.newLink).subscribe(link => {
      this.allLinks.push(link);
    });
    this.newLink = new Link();
  }
}
