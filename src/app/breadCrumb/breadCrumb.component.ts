import { Component } from '@angular/core';

@Component({
  selector: 'bread-crumb-component',
  templateUrl: './breadCrumb.component.html',
  styleUrls: ['./breadCrumb.component.css']
})
export class BreadCrumbComponent {
    breadcrumbs$: Observable<Breadcrumb[]>; 
   
    constructor(private readonly breadcrumbService: BreadcrumbService) { 
      this.breadcrumbs$ = breadcrumbService.breadcrumbs$; 
    } 
  } 

