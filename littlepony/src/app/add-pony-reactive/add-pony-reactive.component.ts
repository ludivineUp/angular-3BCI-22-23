import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Pony } from './../pony';
import { PONIES } from './../mock/mock-ponies';

@Component({
  selector: 'add-pony-reactive',
  templateUrl: './add-pony-reactive.component.html',
  styleUrls: ['./add-pony-reactive.component.css']
})
export class AddPonyReactiveComponent implements OnInit {

  ponyForm = this.fb.group({
    name : ['entrer le nom', Validators.required],
    color : ['et sa couleur', Validators.required],
    age : ['0', Validators.required]
  });

  // injecte le formbuilder, IoC (inversion de contrôle)
  // le formbuilder permet de créer le form en ts dans le composant
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(){
      let newPony : Pony = this.ponyForm.value;
      newPony.id = PONIES.length;
      PONIES.push(newPony);
  }

}
