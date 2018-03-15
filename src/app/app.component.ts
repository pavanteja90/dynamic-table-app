import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private id: string = "#a1";
  constructor(private router: Router){

  }

  ngOnInit(){
    $("#a1").addClass("current-tab active");
  }

  navigate(id){
    $(this.id).removeClass("current-tab active");
    this.id = "#a"+id.toString();
    $(this.id).addClass("current-tab active");
    // this.router.navigate([path]);
  }
}
