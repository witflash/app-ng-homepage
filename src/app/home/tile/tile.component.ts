import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Link } from '../../link';
import { DataService } from '../../data.service';
import { HomeComponent } from '../home.component';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
  @Input() link: Link;
  @Input() allLinks: Link[];
  @Output() onChange = new EventEmitter<Link[]>();

  constructor(
    private data: DataService,
    private home: HomeComponent,
  ) { }

  ngOnInit() {
    console.log(this.link);
  }

  removeLink() {
    console.log(this.link);
    this.data.removeLink(this.link.id)
      .subscribe(link => {
        this.onChange.emit(this.allLinks.filter(item => item.id !== link.id));
      });
  }
}
