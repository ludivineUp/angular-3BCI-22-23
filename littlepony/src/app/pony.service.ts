import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pony } from './pony';

@Injectable({
  providedIn: 'root'
})
export class PonyService {

  url: string = "https://ludivinecrepin.fr/api/";

  httpOption = {
    headers : new HttpHeaders({
      'Content-type' :  'application/json',
    })
  };

  constructor(private http: HttpClient) { }

  // 1 méthode = 1 appel à l'API

  getAll(): Observable<Pony[]> {
    return this.http.get<Pony[]>(this.url+'pony-get.php', this.httpOption);
  }

  // Créer une méthode post pour ajouter un poney
  addPony(pony: Pony): void {
    this.http.post(this.url + 'pony-add.php', pony, this.httpOption).subscribe();
  }

  getPony(id: number): Observable<Pony>{
    return this.http.get<Pony>(this.url + 'pony-get-id.php/' + id, this.httpOption);
  }

  updatePony(p: Pony): void {
    this.http.put(this.url + 'pony-update.php', p, this.httpOption).subscribe();
  }
}
