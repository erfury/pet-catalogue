import { Injectable } from '@angular/core';
import { Pet } from './pet';
import { HttpClient, HttpHeaders } from '@angular/common/http'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpHeaders',
  })
}

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  private petsUrl = 'http://localhost:8080/api/pets';

  pets : Pet[] = [
    { id: 1, name:'Jack', species: 'Bulldog', birthday: '2012-01-01', note: 'The Bulldog, also known as the British Bulldog or English Bulldog', isalive: 'Y'},
    { id: 2, name:'Bankhar', species: 'Mongolian bankhar', birthday: '2011-01-01', note: 'The Tibetan Mastiff is a large Tibetan dog breed belonging to the mastiff family.', isalive: 'Y'},
    { id: 3, name:'Max', species: 'Poodle', birthday: '2011-01-01', note: 'Poodles are a group of formal dog breeds,', isalive: 'N'},
    { id: 4, name:'Cooper', species: 'Rottweiler', birthday: '2011-01-01', note: 'The Rottweiler is a breed of domestic dog, regarded as medium-to-large or large.', isalive: 'N'},
    { id: 5, name:'Buddy', species: 'Husky', birthday: '2011-01-01', note: 'The Siberian Husky is a medium size working dog breed that originated in Northeast Asia', isalive: 'N'},
  ];

  constructor(private http: HttpClient) { }

  getPets() : Promise<Pet[]>{
    //return this.pets;
    return this.http.get<Pet[]>(`${this.petsUrl}`).toPromise();
  }

  getPet(id: number) : Promise<Pet> {
    //return this.pets.find(i => i.id === id);
    return this.http.get<Pet>(`${this.petsUrl}/${id}`).toPromise();
  }

  addPet(formData): Promise<Pet>{
    //const newPet = Object.assign(new Pet(), FormData);
    //newPet.id = this.pets.length + 1;
    //this.pets.push(newPet);
    console.log(formData);
    formData.birthday = formData.birthday + 'T00:00:00.000'
    return this.http.post<Pet>(this.petsUrl,formData,httpOptions).toPromise();
  }

  modifyPet(id: number, formData): Promise<Pet>{
    //const pet = this.pets.find(pet => pet.id === id);
    //Object.assign(pet, formData);
    //return pet;
    console.log(formData);
    
    formData.birthday = formData.birthday + 'T00:00:00.000'
    return this.http.put<Pet>(`${this.petsUrl}/${id}`, formData, httpOptions).toPromise();
  }

  countAlivePets(){
    //return this.pets.filter(i => i.isalive === 'Y').length;
    return this.http.get<object>(`${this.petsUrl}/countAlive`).toPromise();
  }

  countDeadPets(){
    //return this.pets.filter(i => i.isalive === 'N').length;
    return this.http.get<object>(`${this.petsUrl}/countDead`).toPromise();
  }
}
