import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.sass']
})
export class GreetingComponent implements OnInit {
  givenName: string;
  familyName: string;

  constructor() { }

  ngOnInit(): void {
    this.givenName = '';
    this.familyName = '';
  }

}
