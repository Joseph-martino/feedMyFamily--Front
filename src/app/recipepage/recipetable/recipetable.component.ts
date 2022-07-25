import { Component, OnInit,  Input, Output,  EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipetable',
  templateUrl: './recipetable.component.html',
  styleUrls: ['./recipetable.component.scss']
})
export class RecipetableComponent implements OnInit {

  @Input() creationDate : Date = new Date();
  @Input() recipe! : Recipe;
  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onEdit() {
    this.edit.emit(this.recipe);
  }

  onDelete() {
    this.delete.emit(this.recipe.id);
  }

}
