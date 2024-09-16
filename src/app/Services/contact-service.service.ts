import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../Interfaces/contact';
import { Observable } from 'rxjs';

const API_BASE_URL=["https://localhost:7216/api/Contacts"]
@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  constructor(private http: HttpClient) { }

  getAllContactOrderedByName(): Observable<Contact[]> {
    return this.http.get<Contact[]>(API_BASE_URL+"/list-by-surname");
  }

  postContact(contact: Contact ): Observable<Contact>{
    return this.http.post<Contact>(API_BASE_URL+"/create", contact);
  }

  getATheNumberOfClients(contactEmail: string): Observable<number> {
    const url = `${API_BASE_URL}/count-linked-clients`;
    const params = new HttpParams().set('contactEmail', contactEmail);

    return this.http.get<number>(url, { params }); 
  }

}
