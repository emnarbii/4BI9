import { Component } from '@angular/core';
import { Residence } from '../core/models/Residence';
import { ResidenceService } from '../core/services/residence.service';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css'],
})
export class ResidencesComponent {
  residence = 'JihedResidence';
  listResidences!:Residence[];
  color = 'red';
  p="taper votre nom"
toDay:Date= new Date();
constructor(private rs:ResidenceService){}
  clickMe(){
    return alert("bonjour, vous avez cliquer!!!")
  }

  ngOnInit(){
   this.rs.getResidenceList().subscribe(resList=> this.listResidences=resList)
  }

  // listResidences:Residence[]=[
  //   {id:1,"name": "El fel","address":"Borj Cedria", "image":"../../assets/images/R4.jpg", status: "Disponible"},
  //    {id:2,"name": "El yasmine", "address":"Ezzahra","image":"../../assets/images/R4.jpg", status: "Disponible" },
  //    {id:3,"name": "El Arij", "address":"Rades","image":"../../assets/images/R4.jpg", status: "Vendu"},
  //    {id:4,"name": "El Anber","address":"inconnu", "image":"../../assets/images/R4.jpg", status: "En Construction"}
  //  ];

   showLocation(address:string){
    if(address=='inconnu'){
      return alert("l'adresse est inconnue")
    }else {
      return alert("l'adresse est "+address)
    }
  
   }
 
}
