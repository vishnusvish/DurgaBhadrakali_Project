import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pongala',
  templateUrl: './pongala.component.html',
  styleUrls: ['./pongala.component.scss']
})
export class PongalaComponent {

  constructor(public festival:Router){}

getFestival() {
  this.festival.navigate(['festival'])
;
}

}
