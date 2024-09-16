import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ContactServiceService } from '../../Services/contact-service.service';
import { Contact } from '../../Interfaces/contact';

@Component({
  selector: 'app-contacts-component',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
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

 getAllContacts(){
   this.contactService.getAllContactOrderedByName().subscribe((res)=>{
     console.log(res);
     this.contacts=res;
   })
 }
}

