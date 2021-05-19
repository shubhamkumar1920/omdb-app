import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class MovieDataService {
  constructor(private http:HttpClient) { }
  getData(title: any='',currentPage: any) : Observable<any>{
    let url=(`https://www.omdbapi.com/?s=${title}&apikey=453b231&page=${currentPage}`);
    return this.http.get(url).pipe(map((data:any)=>{
      const Results:any=data.Search.map((datas:any)=>{
            return {
              poster:datas.Poster,
              title:datas.Title,
              type:datas.Type,
              year:datas.Year
            }
          })
      return {search:Results,totalResults:data.totalResults}; 
    }));
  }
}
