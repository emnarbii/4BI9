import { Injectable } from '@angular/core';
import { Residence } from '../models/Residence';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {

  url="http://localhost:3000/residences";
  constructor(private http:HttpClient){}
//  listResidences:Residence[]=[
//     {id:1,"name": "El fel","address":"Borj Cedria", "image":"../../assets/images/R4.jpg", status: "Disponible"},
//      {id:2,"name": "El yasmine", "address":"Ezzahra","image":"../../assets/images/R4.jpg", status: "Disponible" },
//      {id:3,"name": "El Arij", "address":"Rades","image":"../../assets/images/R4.jpg", status: "Vendu"},
//      {id:4,"name": "El Anber","address":"inconnu", "image":"../../assets/images/R4.jpg", status: "En Construction"}
//    ];

 

  getResidenceList(){
    return this.http.get<Residence[]>(this.url);
  }
  

  getResidenceById(id:number){
 return this.http.get<Residence>("http://localhost:3000/residences" + "/" + id)
  }

  addResidence(r:Residence){
    return this.http.post(this.url,r)
  }

  updateResidence(r:Residence, id:number){
    return this.http.put(this.url+ "/" + id,r)
  }
}


