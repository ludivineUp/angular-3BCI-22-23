import {Component, EventEmitter, OnInit} from '@angular/core';
import { Pony } from './../pony';
import { PonyService } from './../pony.service';

@Component({
  selector: 'ponies',
  templateUrl: './ponies.component.html',
  styleUrls: []
})
export class PoniesComponent implements OnInit {

  ponies: Pony[] =  [];

  constructor(private service: PonyService) {
    this.service.getAll().subscribe((p) => {
      this.ponies = p;
    });
  }

  ngOnInit(): void {
    console.log('ponies ' + this.ponies);
  }



}
