import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Fruit } from '../../models/fruit';
import { FruitsService } from '../../services/fruits.service';

@Component({
  selector: 'app-fruits-create',
  templateUrl: './fruits-create.component.html',
  styleUrls: ['./fruits-create.component.scss']
})
export class FruitsCreateComponent implements OnInit {

  fruitFormGroup: FormGroup;

  constructor(private service: FruitsService, private fromBuilder: FormBuilder) {
    this.fruitFormGroup = this.fromBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    })
  }

  sendFruit() {
    if(!this.fruitFormGroup.invalid){
      const fruit: Fruit = {...this.fruitFormGroup.value}
      this.service.sendFruit(fruit).subscribe(x => console.log(x))
    }
  }

  ngOnInit() {
    this.service.getFruits().subscribe(x => console.log(x))
  }
}
