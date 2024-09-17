import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ClientCreateComponentComponent } from '../client-create-component/client-create-component.component';
import { Client } from '../../Interfaces/client';
import { HttpClient } from '@angular/common/http';
import { ClientServiceService } from '../../Services/client-service.service';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clients-component',
  standalone: true,
  imports: [RouterLink,CommonModule,MatTableModule,ClientCreateComponentComponent],
  templateUrl: './clients-component.component.html',
  styleUrl: './clients-component.component.css'
})
export class ClientsComponentComponent {
  clients : Client[]=[];
  displayedColumns: string[] = ['firstName', 'clientCode', 'contacts'];  // Main client columns
  contactColumns: string[] = ['name', 'surname', 'email'];  // Nested contact columns

  constructor(private clientService : ClientServiceService) { }

  ngOnInit(){
    this.getAllClients();
   }
 
   getAllClients(){
    //  this.clientService.getAllClientsOrderedByName().subscribe((res)=>{
    //    console.log(res);
    //    this.clients=res;
    //  })
    this.clientService.getAllClientsOrderedByName().subscribe((res) => {
      this.clients = res.map(client => ({
        ...client,
        linkedContacts: client.contacts.length // Calculate the number of linked contacts
      }));
    });
   }

}
