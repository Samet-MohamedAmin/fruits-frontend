import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FruitsCreateComponent } from './components/fruits-create/fruits-create.component';
import { FruitsListComponent } from './components/fruits-list/fruits-list.component';

const routes: Routes = [
  // {path: 'fruits', children: [
    { path: '', pathMatch: 'full', redirectTo: 'list' },
    { path: 'list', component: FruitsListComponent },
    { path: 'create', component: FruitsCreateComponent },
  // ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FruitsRoutingModule { }
