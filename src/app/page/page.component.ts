import { Inteface } from './../inteface';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page',
  imports: [],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css',
})
export class PageComponent implements OnInit {
   list!:Inteface[]
   Url:string="https://image.tmdb.org/t/p/original";
   $sub:Subscription=new Subscription()
    constructor(private service:ServiceService) { }
  ngOnInit(): void {

    this.getmovies();
  
  }
  
  getmovies(){
    this.service.getmovies().subscribe({
        next:(res)=>{

          this.list=res.results
          console.log(this.list);

          }
        ,error:(err)=>{console.log(err);}
        }
      )    
  }

   
  }
