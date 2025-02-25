import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResidenceService } from '../core/services/residence.service';
import { Route } from '@angular/router';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css'],
})
export class AddResidenceComponent {
  residenceForm!: FormGroup;

  constructor(private rs: ResidenceService) {
    this.residenceForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('^[A-Z][a-z]+$'),
      ]),
      address: new FormControl('', [
        Validators.required,
        Validators.minLength(15),
        Validators.maxLength(50),
      ]),
      status: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
    });
  }

  get name() {
    return this.residenceForm.get('name');
  }

  // getFormValue(){
  //   return    console.log(this.residenceForm.value);

  // }

  add() {
    this.rs
      .addResidence(this.residenceForm.value)
      .subscribe(() => console.log('added with success'));
  }
}
