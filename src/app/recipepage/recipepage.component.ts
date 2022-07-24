import { Component, OnInit, Input, Output,  EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipe.model';


@Component({
  selector: 'app-recipepage',
  templateUrl: './recipepage.component.html',
  styleUrls: ['./recipepage.component.scss']
})

export class RecipepageComponent implements OnInit {

 
  @Input() type : any[] = [];
  @Input() teams: any[] = [];
  @Input() creationDate : Date = new Date();
  @Input() recipe! : Recipe;
  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}


    onEdit() {
      this.edit.emit(this.recipe);
    }

    onDelete() {
      this.delete.emit(this.recipe.id);
    }
  

}
