import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  president:string = "Vijaykumar J";
  treaurer:string = "Sajeev .S";
  secretary:string= "Vijayaraj.C";
  vicePresident1:string ="-Satheesh N (Machu)";
  vicePresident2:string ="-Suresh T";
  jointScretary1:string = "-Gireeshkumar. D";
  jointScretary2:string = "Vijayn.S";
  convenor1:string = "Sadasivan. P";
  convenor2:string = "Sisubalan";
  kshethrathantri:string = "Deepu potti";
  Rakshathikari:string = "Adharsh M.J";
  kshethrashanthi:string = "Santha kumar";

  totalLength! : number;
  members :string[] = [
    "Vishnu.S", "Vijin.V.R", "Vijeesh V.R", "Dileep .S", "Vineesh .V",
    "Abijith.G", "J.Sreekumar", "Pradeep .S", "Anurag S", "Suresh .T",
    "Abishesk.S.S", "Nithu Sajeev", "Pranav.P", "Ajith.G", "Abishesk.S.S"
  ]
  nOnInit(){
    this.totalLength =  this.members.length
  }
  constructor(public gallery:Router){}

  getGallery(){
    this.gallery.navigate(['gallery'])
  }
}
