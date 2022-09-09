import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Pony } from '../pony';
import {PonyService} from "../pony.service";

@Component({
  selector: 'add-pony-reactive',
  templateUrl: './add-pony-reactive.component.html',
  styleUrls: ['./add-pony-reactive.component.css']
})
export class AddPonyReactiveComponent implements OnInit {

  ponyForm = this.form_builder.group({
    name : ['', [Validators.required, Validators.maxLength(50)]],
    color : ['', Validators.required],
    age : [18, [Validators.required, Validators.min(0), Validators.max(40)]]
  });

  constructor(private form_builder: FormBuilder,
              private ponyS: PonyService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
      let newPony : Pony = this.ponyForm.value;
      console.log(this.ponyForm.controls['color'].value);
      console.log(this.ponyForm.controls['name'].value);
      console.log(this.ponyForm.controls['age'].value);
      this.ponyS.addPony(newPony);
  }

}
