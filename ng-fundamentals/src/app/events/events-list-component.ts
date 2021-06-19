import { Component, OnInit } from "@angular/core";
import { EventServices } from "./shared/event-services";

@Component({
    selector:'event-list',
    templateUrl:'./events-lists-component.html'  
})


export class Eventslistcomponent implements OnInit
{
  events :any[];
constructor(private eventservices:EventServices)
{
      
}
    /* handleEventClicked(data){
        console.log('recieved :' ,data)
    } */
    ngOnInit() {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      
      this.events=this.eventservices.getevents();
    }
    }

