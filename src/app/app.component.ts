import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private id: string = "#a1";
  constructor(){

  }

  ngOnInit(){
    $("#a1").addClass("current-tab");
  }

  navigate(id){
    $(this.id).removeClass("current-tab");
    this.id = "#a"+id.toString();
    $(this.id).addClass("current-tab");
  }
}
