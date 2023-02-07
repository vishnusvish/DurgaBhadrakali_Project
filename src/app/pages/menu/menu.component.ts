import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  constructor(public route:Router){}

  ngOnInt(){

  }

  getEvent(){
    this.route.navigate(['pongala'])
  }

}
