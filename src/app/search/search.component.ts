import { Component, OnInit } from '@angular/core';
import {MovieDataService} from '../movie-data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTitle='';
  isFilter;
  movieList = [];
  yearList=[];
  totalRecords:String;
  searchValue:any;
  searchUrl:any;
  pageChange:any;
  filter:any;
  handleYear(event){
    this.isFilter=event;
    console.log(this.movieList);
    if(event){
      this.yearList=[...this.movieList.filter((item) =>item.year>=2010)];
      console.log(this.yearList);
    }
  }
  searchMovie(title:any,page:any=1){
    this.dataService.getData(title,page).subscribe((data)=>{
      this.movieList=data.search;
      this.totalRecords=data.totalResults;
    })
  }
  constructor(private dataService:MovieDataService, private route:ActivatedRoute) { 
    this.movieList = new Array<any>()
  }
  url(search,page=1){
    this.searchUrl=`/search/${search}/page/${page}`;
    return this.searchUrl;
  } 
  ngOnInit(): void {
    const {search,page}=this.route.snapshot.params;
    this.searchValue=search;
    this.pageChange=page;
    this.searchMovie(search,page);
    console.log(this.movieList);
  }
}

