import { Component, OnInit } from '@angular/core';
import { PetsService } from "../pets.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private PetsService: PetsService) { }

  //LOCAL VARIABLES
  numberOfDeadPets;
  numberOfAlivePets;

  async ngOnInit() {
    try{
      this.numberOfAlivePets = await this.PetsService.countAlivePets();
      this.numberOfDeadPets = await this.PetsService.countDeadPets();
    }
    catch(e){
      console.error(e);
    }
  }
}
