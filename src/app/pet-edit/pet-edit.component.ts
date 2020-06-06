import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet';
import { PetsService } from '../pets.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent implements OnInit {

  pet: Pet = new Pet();
  id: number = null;

  constructor(
    private petService: PetsService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      try{
        this.id = +id;
        this.pet = await this.petService.getPet(this.id);
        this.pet.birthday = this.pet.birthday.substr(0,10);
      }
      catch(e){
        console.error(e);
      }
    }
  }

  handleSave(formData){
    if(this.id){
      this.petService.modifyPet(this.id, formData);
      this.location.back();
    }else{
      this.petService.addPet(formData);
      this.petService.getPets();
      this.router.navigate(['/pets']);
    }
  }
}
