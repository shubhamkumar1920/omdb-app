import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() moviedata;
  @Input() url;
  @Input() search;
  @Input() page;
  @Input() totalRecords;
  @Input() filter;
  pChange:any;

  myEvent(page:any){
    this.pChange=`/search/${this.search}/page/${page}`;
    return this.pChange;
  }
  imageChange(event){
    event.target.src='../../assets/No_image_available.svg.png';
  }
  constructor() { }
  ngOnInit(): void {
  }
}
