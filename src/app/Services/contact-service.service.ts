import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../Interfaces/contact';
import { Observable } from 'rxjs';

const BASIC_URL=["https://localhost:7216/api/Contacts"]
@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  constructor(private http: HttpClient) { }

  getAllContactOrderedByName(): Observable<Contact> {
    return this.http.get<Contact>(BASIC_URL+"/list");
  }

}
