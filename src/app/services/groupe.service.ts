import { Injectable } from '@angular/core';
import { Groupe } from '../models/groupe.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const apiUrlGroupe = environment.API_URL+"/groupes";

@Injectable({
  providedIn: 'root'
})
export class HttpGroupeService {

  constructor(private http:HttpClient) { }

  findAll() {
    return this.http.get<Groupe>(apiUrlGroupe);
  }

  findById(id:number){
    return this.http.get<Groupe>(`${apiUrlGroupe}/${id}`);
  }

  save(groupe:Groupe){
    return this.http.post<Groupe>(apiUrlGroupe,groupe);
  }

  delete(id:number){
    return this.http.delete<Groupe>(`${apiUrlGroupe}/${id}`);
  }
}
