import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pony } from './pony';

@Injectable({
  providedIn: 'root'
})
export class PonyService {

  url = "https://ludivinecrepin.fr/api/";

  httpOption = {
    headers : new HttpHeaders({
      'Content-type' :  'application/json',
      'Access-Control-Allow-Origin': '*',
    })
  };

  constructor(private http: HttpClient) { }

  // 1 méthode = 1 appel à l'API

  getAll(): Observable<Pony[]> {
    return this.http.get<Pony[]>(this.url+'pony-get.php', this.httpOption);
  }
}
