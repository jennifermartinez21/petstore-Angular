import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { PetListComponent } from './public/pet/pet-list/pet-list.component'; //Importación de la clase del componente app-pet
import { PetDetailComponent } from './public/pet/pet-detail/pet-detail.component'
import { CreatePetComponent } from './admin/pet/create-pet/create-pet.component'

const routes: Routes = [
  { path: 'pets', component:PetListComponent,  pathMatch: 'full'},
  { path: 'pets/:id', component:PetDetailComponent },
  { path: 'admin/pets/create', component:CreatePetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }