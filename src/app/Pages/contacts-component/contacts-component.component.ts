import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ContactServiceService } from '../../Services/contact-service.service';
import { Contact } from '../../Interfaces/contact';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-contacts-component',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule,MatTableModule],
  templateUrl: './contacts-component.component.html',
  styleUrl: './contacts-component.component.css'
})
export class ContactsComponentComponent {
  contacts: Contact[]=[];

  constructor(private contactService: ContactServiceService) {}

  ///

ngOnInit(){
  this.getAllContacts();
 }

 getAllContacts() {
  this.contactService.getAllContactOrderedByName().subscribe((res) => {
    console.log(res);
    this.contacts = res.map(contact => ({
      ...contact,
      linkedClients: contact.clients ? contact.clients.length : 0
    }));
  });
}
}

