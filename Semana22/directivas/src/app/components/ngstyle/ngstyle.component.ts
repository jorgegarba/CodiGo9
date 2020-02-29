import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {

  miCard:Object = {
    boxShadow: '2px 2px 2px black',
    borderRadius: '15px'
  }

  color:string = "#cccccc";

  constructor() { }

  ngOnInit(): void {
  }

}
