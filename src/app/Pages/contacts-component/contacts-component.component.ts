import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactServiceService } from '../../Services/contact-service.service';

@Component({
  selector: 'app-contacts-component',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './contacts-component.component.html',
  styleUrl: './contacts-component.component.css'
})
export class ContactsComponentComponent {

  constructor(private contactService: ContactServiceService) {}
}
