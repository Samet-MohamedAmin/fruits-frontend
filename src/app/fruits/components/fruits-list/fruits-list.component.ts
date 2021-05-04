import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Fruit } from '../../models/fruit';
import { FruitsService } from '../../services/fruits.service';

@Component({
  selector: 'app-fruits-list',
  templateUrl: './fruits-list.component.html',
  styleUrls: ['./fruits-list.component.scss']
})
export class FruitsListComponent {

  displayedColumns: string[] = ['id', 'name', 'description'];

  fruits: Fruit[] = [];

  dataSource = new MatTableDataSource(this.fruits);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private service: FruitsService) { }

  getFruits(): Observable<Fruit[]>{
    return this.service.getFruits()
  }
}
