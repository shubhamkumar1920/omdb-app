import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'',
    component:SearchComponent
  },
  {
    path:'search/:search/page/:page',
    component:SearchComponent
  },
  {
    path:'**',
    component:PageNotFoundComponent,
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {onSameUrlNavigation:'reload'}),
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
