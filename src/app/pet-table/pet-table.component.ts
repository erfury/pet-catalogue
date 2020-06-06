import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet';
import { PetsService } from '../pets.service'

@Component({
  selector: 'app-pet-table',
  templateUrl: './pet-table.component.html',
  styleUrls: ['./pet-table.component.css']
})
export class PetTableComponent implements OnInit {

  pets : Pet[];

  elements: any = [
    //{id: 1, first: 'Mark', last: 'Otto', handle: '@mdo'},
    //{id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat'},
    //{id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
  ];

  headElements = ['ID', 'Name', 'Species', 'Birthday', 'Alive', 'Note', ''];

  constructor(private petsService: PetsService) { }

  async ngOnInit() {
    try{
      this.pets = await this.petsService.getPets();
      this.pets.forEach(item =>{
        item.birthday = item.birthday.substr(0,10)
        this.elements.push(item);
      } )
      console.log(this.elements);
    }
    catch(e){
      console.error(e);
    }
  }

}
