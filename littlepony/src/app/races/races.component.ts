import { Component, OnInit } from '@angular/core';
import { Race } from './../race';
import { RACES } from './../mock/mock-races';

@Component({
  selector: 'races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {

  races : Race[] = [];

  constructor() { 
    this.races = RACES;
  }

  ngOnInit(): void {
  }

}
