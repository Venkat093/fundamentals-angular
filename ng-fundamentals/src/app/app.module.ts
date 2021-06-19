import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventThumbnailcomponent } from './events/event-thumbnail-component';
import { Eventslistcomponent } from './events/events-list-component';
import { EventServices } from './events/shared/event-services';

import { Navbarcomponent } from './nav/navbarrcomponent';


@NgModule({
  declarations: [
    AppComponent,
    Eventslistcomponent,
    EventThumbnailcomponent,
    Navbarcomponent
    
  ],
  providers:[EventServices],
  imports: [
    BrowserModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
