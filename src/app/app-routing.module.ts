import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PingComponent } from './core/ping/ping.component';


const routes: Routes = [
  {path: 'ping', component: PingComponent},
  {path: '', pathMatch: 'full', redirectTo: 'fruits'},
  {path: 'fruits', loadChildren: () => import('./fruits/fruits.module').then(m => m.FruitsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
