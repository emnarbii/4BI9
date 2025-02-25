import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './residences/residences.component';
import { DetailResidenceComponent } from './detail-residence/detail-residence.component';
import { HomeComponent } from './home/home.component';
import { NoyFoundComponent } from './noy-found/noy-found.component';
import { AddResidenceComponent } from './add-residence/add-residence.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'residences', component:ResidencesComponent, children:[
    {path:'details', component:DetailResidenceComponent}
  ]},
  {path:"addResidence", component:AddResidenceComponent},
  {path:'residenceDetails/:param', component:DetailResidenceComponent},
  {path:'**', component:NoyFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
