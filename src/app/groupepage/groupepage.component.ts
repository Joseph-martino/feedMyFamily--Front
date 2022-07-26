import { Component, OnInit } from '@angular/core';
import { HttpGroupeService } from 'src/app/services/groupe.service';
import { Groupe } from '../models/groupe.model';


@Component({
  selector: 'app-groupepage',
  templateUrl: './groupepage.component.html',
  styleUrls: ['./groupepage.component.scss']
})
export class GroupepageComponent implements OnInit {

  groupes: Groupe[] = [];

  constructor(private serviceGroupe:HttpGroupeService) {
    // this.serviceGroupe.findAll().subscribe((data)=> this.groupes=data);
  }

  ngOnInit(): void {}

  }