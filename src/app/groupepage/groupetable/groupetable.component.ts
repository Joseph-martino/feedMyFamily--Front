import { Component, OnInit,  Input, Output, EventEmitter } from '@angular/core';
import { Groupe } from '../models/groupe.model';

@Component({
  selector: 'app-groupetable',
  templateUrl: './groupetable.component.html',
  styleUrls: ['./groupetable.component.scss']
})
export class GroupetableComponent implements OnInit {

  
  @Input() type : any[] = [];
  @Input() teams: any[] = [];
  @Input() nombreMembre : NombreMembre = new NombreMembre();
  @Input() groupe! : Groupe;
  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onEdit() {
    this.edit.emit(this.groupe);
  }

  onDelete() {
    this.delete.emit(this.groupe.id);
  }

}
