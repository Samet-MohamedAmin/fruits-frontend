import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FruitsComponent } from './fruits.component';
import { FruitsRoutingModule } from './fruits-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { FruitsListComponent } from './components/fruits-list/fruits-list.component';
import { FruitsCreateComponent } from './components/fruits-create/fruits-create.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FruitsService } from './services/fruits.service';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FruitsRoutingModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    FruitsComponent,
    FruitsListComponent,
    FruitsCreateComponent
  ],
  providers: [
    FruitsService
  ]
})
export class FruitsModule { }
