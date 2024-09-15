import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ClientCreateComponentComponent } from '../client-create-component/client-create-component.component';
import { Client } from '../../Interfaces/client';
import { HttpClient } from '@angular/common/http';
import { ClientServiceService } from '../../Services/client-service.service';

@Component({
  selector: 'app-clients-component',
  standalone: true,
  imports: [RouterLink,ClientCreateComponentComponent],
  templateUrl: './clients-component.component.html',
  styleUrl: './clients-component.component.css'
})
export class ClientsComponentComponent {
  clients : any=[];

  constructor(private clientService : ClientServiceService) { }

  ngOnInit(){
    this.getAllClients();
   }
 
   getAllClients(){
     this.clientService.getAllClientsOrderedByName().subscribe((res)=>{
       console.log(res);
       this.clients=res;
       
     })
   }

}
