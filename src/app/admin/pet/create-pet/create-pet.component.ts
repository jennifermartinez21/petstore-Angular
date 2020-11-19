import { Component, OnInit } from '@angular/core';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-create-pet',
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.css']
})
export class CreatePetComponent implements OnInit {

  pet = {
    "categoryDTO": {
      "id": 0
    },
    "name": "string",
    "photourl": "string",
    "price": 0,
    "status": true,
    "tagDTO": {
      "id": 0
    }
  }

  public category:Array<any>;
  public tags:Array<any>;

  submitted = false;

  constructor(private petService: PetService) { }

  ngOnInit(): void {
    this.retrieveCategories();
    this.retrieveTags()
  }

  retrieveCategories(): void {
    this.petService.getAllCat()
      .subscribe(
        data => {
          this.category = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  retrieveTags(): void {
    this.petService.getAllTags()
      .subscribe(
        data => {
          this.tags = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  savePet(): void {
    const data = {
      "categoryDTO":{
        "id":Number(this.pet.categoryDTO.id)
      },
      "name": this.pet.name,
      "photourl": this.pet.photourl,
      "price": Number(this.pet.price),
      "status": this.pet.status,
      "tagDTO":{
        "id":Number(this.pet.tagDTO.id)
      }
    };

    const data2 = JSON.stringify(data);

    this.petService.create(data2)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
          console.log(data2);
        });
  }

  newPet(): void{
    this.submitted = false;
    this.pet = {
      "categoryDTO": {
        "id": 0
      },
      "name": "string",
      "photourl": "string",
      "price": 0,
      "status": true,
      "tagDTO": {
        "id": 0
      }
    }
  }


}
