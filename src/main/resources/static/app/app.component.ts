/**
 * MiausicBox main component.
 * @component AppComponent
 */
import { BandComponent } from "./band.component";
import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router } from 'angular2/router';

import { SignInComponent } from './signin.component';
import { VisitorComponent } from './visitor.component';
import { IndexComponent } from './index.component';
import { LoggedComponent } from './logged.component';
import { PrincipalComponent } from './principal.component';
import { ArtistaComponent } from './profile.component';
import { MessagesComponent } from './messages.component';
import { EventsComponent } from './events.component';
import { EventComponent } from './event.component';
import { FollowersEvent } from './followersEvent.component';
import { ListArtistComponent } from './list-artist.component'
import { ListBandsComponent } from './list-bands.component'

//Services

// Classes
import { FollowingComponent } from "./following.component";
import { FollowersComponent } from "./followers.component";

@Component({
    selector: 'my-app',
    template: `
    <div id="navPag">
      <logged></logged>
    </div>
    <principal></principal>
    <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES, LoggedComponent],
    providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
    {
      path: '/',
      name: 'Index',
      component: IndexComponent,
      useAsDefault: true
    },
    {
        path: '/visitor',
    name: 'Visitor',
        component: VisitorComponent
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignInComponent
    },
    {
      path: '/principal:id',
      name: 'Principal',
      component: PrincipalComponent
    },
    {
      path: '/artist/:id',
      name: 'Artist',
      component: ArtistaComponent
    },
    {
      path: '/band/:id',
      name: 'Band',
      component: BandComponent
    },
    {
      path: '/messages/:id',
      name: 'Messages',
      component: MessagesComponent
    },
    {
      path: '/events',
      name: 'Events',
      component: EventsComponent
    },
    {
        path: '/event/:id',
        name: 'Event',
        component: EventComponent
    },
    {
        path: '/followersEvent/:id',
        name: 'FollowersEvent',
        component: FollowersEvent
    },
    {
      path: '/listArtist',
      name: 'ListArtist',
      component: ListArtistComponent
    },
    {
      path: '/listBands',
      name: 'ListBands',
      component: ListBandsComponent
    },
    {
        path: '/following/:id',
        name: 'Following',
        component: FollowingComponent
    },
    {
        path: '/followers/:id',
        name: 'Followers',
        component: FollowersComponent,
    }
])

export class AppComponent{

  //Common variables of the application

  constructor(private _router: Router){
    this.routerSuscription();
  }


  //We subscribe to router to know when we should put the nav on page
  //and change navbar
  routerSuscription(){
    this._router.subscribe((val) => {
      if(val == "" || val == "visitor" || val == "signin"){
        $("#navPag").css("visibility", "");
      }
      else{
        $("#navPag").css("visibility", "visible");
      }
    });
  }

}
