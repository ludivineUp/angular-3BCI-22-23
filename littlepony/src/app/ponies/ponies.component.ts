import { Component, OnInit } from '@angular/core';
import { PONIES } from './../mock/mock-ponies';
import { Pony, } from './../pony';
@Component({
  selector: 'ponies',
  templateUrl: './ponies.component.html',
  styleUrls: []
})
export class PoniesComponent implements OnInit {

  ponies: Pony[] =  [];

  constructor() { 
    this.ponies = PONIES;
  }

  ngOnInit(): void {
  }

}
