import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../Interfaces/client';
import { Observable } from 'rxjs';

const API_BASE_URL=["https://localhost:7216/api/clients"]


@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

  constructor(private http: HttpClient) { }

  getAllClientsOrderedByName(): Observable<Client[]> {
    return this.http.get<Client[]>(API_BASE_URL+"/list");
  }

  getATheNumberOfContacts(firstName: string): Observable<number> {
    const url = `${API_BASE_URL}/count-linked-contacts`;
    const params = new HttpParams().set('firstName', firstName);

    return this.http.get<number>(url, { params }); 
  }

  postClient(client: Client ): Observable<Client>{
    return this.http.post<Client>(API_BASE_URL+"/create", client);
  }
}
