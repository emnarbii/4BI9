import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResidenceService } from '../core/services/residence.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Residence } from '../core/models/Residence';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css'],
})
export class AddResidenceComponent {
  residenceForm!: FormGroup;
  id!: number;
  residence!: Residence;
  constructor(
    private rs: ResidenceService,
    private route: Router,
    private act: ActivatedRoute
  ) {
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

  ngOnInit() {
    this.id = this.act.snapshot.params['id'];
    console.log(this.id);
    //récupérer la residence by id
    this.rs.getResidenceById(this.id).subscribe((res) => {
      this.residence = res;
      console.log(this.residence);
      this.residenceForm.patchValue(this.residence);
    });
  }

  get name() {
    return this.residenceForm.get('name');
  }

  // getFormValue(){
  //   return    console.log(this.residenceForm.value);

  // }

  save() {
    if (this.id) {
      this.rs
        .updateResidence(this.residenceForm.value, this.id)
        .subscribe(() => this.route.navigate(['/residences']));
    } else {
      this.rs
        .addResidence(this.residenceForm.value)
        .subscribe(() => this.route.navigate(['/residences']));
    }
  }
}
