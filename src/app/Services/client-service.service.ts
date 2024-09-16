import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../Interfaces/client';
import { Observable } from 'rxjs';

const BASIC_URL=["https://localhost:7216/api/clients"]


@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  constructor(private http: HttpClient) { }

  getAllClientsOrderedByName(): Observable<Client> {
    return this.http.get<Client>(BASIC_URL+"/list");
  }
}
