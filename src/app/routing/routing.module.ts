import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from '../main-page/main-page.component';
import { PetListComponent } from '../pet-list/pet-list.component';
import { PetEditComponent } from '../pet-edit/pet-edit.component';
import { PetTableComponent } from '../pet-table/pet-table.component';
import { AboutComponent } from '../about/about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: MainPageComponent
  },
  {
    path: 'pets',
    component: PetListComponent
  },
  {
    path: 'pets/new',
    component: PetEditComponent
  },
  {
    path: 'pets/:id',
    component: PetEditComponent
  },
  {
    path: 'pets/:id/edit',
    component: PetEditComponent,
  },
  {
    path: 'pet-table',
    component: PetTableComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }