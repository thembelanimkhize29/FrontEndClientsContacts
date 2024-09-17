import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ClientCreateComponentComponent } from '../client-create-component/client-create-component.component';
import { Client } from '../../Interfaces/client';
import { HttpClient } from '@angular/common/http';
import { ClientServiceService } from '../../Services/client-service.service';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MockClientService } from '../../Services/mock-client.service';

@Component({
  selector: 'app-clients-component',
  standalone: true,
  imports: [RouterLink,CommonModule,MatTableModule,ClientCreateComponentComponent],
  templateUrl: './clients-component.component.html',
  styleUrl: './clients-component.component.css'
})
export class ClientsComponentComponent {
  clients : Client[]=[];

  constructor(private clientService : ClientServiceService,private clientsService: MockClientService) { }

  ngOnInit(){
    this.getAllClients();
   }
 
   getAllClients(){
    this.clientService.getAllClientsOrderedByName().subscribe((res) => {
      //    this.clients=res;
      this.clients = res.map(client => ({
        ...client,
        linkedContacts: client.contacts.length
      }));
    });
   }

   getAllClientsMock() {
    this.clientsService.getAllClientsOrderedByName().subscribe((res) => {
      console.log(res);
      this.clients = res.map(client => ({
        ...client,
        linkedContacts: client.contacts.length
      }));
    });
  }

}
