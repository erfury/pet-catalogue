import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Pet } from '../pet';
import { Validators, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css'],
})
export class PetFormComponent implements OnInit, OnChanges {

  @Input() pet : Pet;
  @Output() save = new EventEmitter<Pet>();
  
  form = this.fb.group({
    name: ['', [Validators.required]],
    species: ['', [Validators.required]],
    note: [''],
    isalive: ['Y'],
    birthday: [Date.now()]
  })

  

  get name() { return this.form.get('name'); }
  get species() { return this.form.get('species'); }
  get note() { return this.form.get('note'); }
  get isalive() { return this.form.get('isalive'); }
  get birthday() { return this.form.get('birthday'); }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.form.patchValue(this.pet)
    console.log(this.pet);
    
  }

  onSubmit(){
    this.save.emit(this.form.value)
  }

  updateAlive(e){
    this.form.setControl("isalive", new FormControl(e.target.checked ? "Y" : "N"))
    //this.ngOnChanges();
    console.log(e.target.checked);
  }
}
