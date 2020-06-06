import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet';
import { PetsService } from '../pets.service'

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  pets: Pet[];
  selectedPet: Pet;

  constructor(private petsService: PetsService) { }

  async ngOnInit() {
    try{
      this.pets = await this.petsService.getPets();
      this.pets.forEach(item => item.birthday = item.birthday.substr(0,10))
    }
    catch(e){
      console.error(e);
    }
  }
}


