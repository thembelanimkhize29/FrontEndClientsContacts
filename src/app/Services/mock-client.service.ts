import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockClientService {
  
  private mockClients = [
    {
      id: 4,
      firstName: "First Attempt Bank",
      clientCode: "FAB001",
      contacts: []
    },
    {
      id: 2,
      firstName: "First National Bank",
      clientCode: "FNB001",
      contacts: [
        {
          id: 1,
          name: "Jane",
          surname: "Smith",
          email: "thembelanimkhize29@gmail.com"
        },
        {
          id: 2,
          name: "Jane",
          surname: "Smith",
          email: "thembelanimkhize28@gmail.com"
        }
      ]
    },
    {
      id: 3,
      firstName: "gProtea uh",
      clientCode: "GUA001",
      contacts: [
        {
          id: 5,
          name: "Jane",
          surname: "Smith",
          email: "themelanimkhiz9@gmail.com"
        },
        {
          id: 6,
          name: "Jane",
          surname: "Smith",
          email: "thembelhe28@gmail.com"
        }
      ]
    },
    {
      id: 1,
      firstName: "Protea",
      clientCode: "PAA001",
      contacts: [
        {
          id: 1,
          name: "Jane",
          surname: "Smith",
          email: "thembelanimkhize29@gmail.com"
        },
        {
          id: 2,
          name: "Jane",
          surname: "Smith",
          email: "thembelanimkhize28@gmail.com"
        }
      ]
    }
  ];

  constructor() {}

  getAllClientsOrderedByName(): Observable<any[]> {
    return of(this.mockClients);
  }
}
