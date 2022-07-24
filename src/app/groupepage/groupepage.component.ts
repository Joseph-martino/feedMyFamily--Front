import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-groupepage',
  templateUrl: './groupepage.component.html',
  styleUrls: ['./groupepage.component.scss']
})
export class GroupepageComponent implements OnInit {

  @Input() type : any[] = [];
  @Input() teams: any[] = [];
  @Input() nomMembre : NomMembre = new NomMembre();
  @Input() groupe! : Groupe;
  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}


    onEdit() {
      this.edit.emit(this.groupe);
    }

    onDelete() {
      this.delete.emit(this.groupe.id);
    }

  }