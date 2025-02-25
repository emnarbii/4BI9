import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Residence } from '../core/models/Residence';
import { __param } from 'tslib';

@Component({
  selector: 'app-detail-residence',
  templateUrl: './detail-residence.component.html',
  styleUrls: ['./detail-residence.component.css'],
})
export class DetailResidenceComponent {
  constructor(private act: ActivatedRoute) {}
  id!: number;
  residence:Residence|undefined;
  listResidences: Residence[] = [
    {
      id: 1,
      name: 'El fel',
      address: 'Borj Cedria',
      image: '../../assets/images/R4.jpg',
      status: 'Disponible',
    },
    {
      id: 2,
      name: 'El yasmine',
      address: 'Ezzahra',
      image: '../../assets/images/R4.jpg',
      status: 'Disponible',
    },
    {
      id: 3,
      name: 'El Arij',
      address: 'Rades',
      image: '../../assets/images/R4.jpg',
      status: 'Vendu',
    },
    {
      id: 4,
      name: 'El Anber',
      address: 'inconnu',
      image: '../../assets/images/R4.jpg',
      status: 'En Construction',
    },
  ];

  ngOnInit() {
    // this.id = this.act.snapshot.params['param'];
  this.act.paramMap.subscribe(param=>{this.id = Number (param.get('param'));})
    this.residence=this.listResidences.find((res) => res.id==this.id);
  }
  // filterResidence() {
  //   this.listResidences.filter((res) => res.id == this.id);
  // }
}
