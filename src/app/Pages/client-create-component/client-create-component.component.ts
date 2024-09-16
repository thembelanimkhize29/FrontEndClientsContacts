import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ClientServiceService } from '../../Services/client-service.service';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-create-component',
  standalone: true,
  imports: [RouterLink, CommonModule, MatDividerModule, ReactiveFormsModule, RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule, MatFormFieldModule,
    MatInputModule,
    MatCardModule],
  templateUrl: './client-create-component.component.html',
  styleUrl: './client-create-component.component.css'
})
export class ClientCreateComponentComponent {

  postCreateClientForm!: FormGroup;
  showContactForm = false;

  @ViewChild('contactsEnd', { static: false }) contactsEnd!: ElementRef;

  constructor(private fb: FormBuilder, private clientService: ClientServiceService) {
    this.postCreateClientForm = this.fb.group({
      firstName: ['', Validators.required],
      contacts: this.fb.array([])
    });
  }
  // Getter to access the contacts FormArray
  get contacts(): FormArray {
    return this.postCreateClientForm.get('contacts') as FormArray;
  }

  createContact(): FormGroup {
    return this.fb.group({
      contactName: ['', Validators.required],
      contactSurname: ['', Validators.required],
      contactEmail: ['', [Validators.required, Validators.email]]
    });
  }

  addContact(): void {
    this.contacts.push(this.createContact());
    setTimeout(() => this.scrollToBottom(), 0); 
  }

  removeContact(index: number): void {
    this.contacts.removeAt(index);
  }

  scrollToBottom(): void {
    this.contactsEnd.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  createClient() {
    if (this.postCreateClientForm.valid) {
      console.log(this.postCreateClientForm.value);
       this.clientService.postClient(this.postCreateClientForm.value).subscribe((res)=>{
      //console.log(res);
    })
    }
   
  }

  // createClient1() {
  //   if (this.postCreateClientForm.valid) {
  //     const clientData: Client = {
  //       firstName: this.postCreateClientForm.get('firstName').value,
  //       contacts: []
  //     };

  //     
  //     const contactName = this.postCreateClientForm.get('contactName').value;
  //     const contactSurname = this.postCreateClientForm.get('contactSurname').value;
  //     const contactEmail = this.postCreateClientForm.get('contactEmail').value;

  //     if (contactName && contactSurname && contactEmail) {
  //       clientData.contacts.push({
  //         name: contactName,
  //         surname: contactSurname,
  //         email: contactEmail
  //       });
  //     }

  //     
  //     this.clientService.postClient(clientData).subscribe(
  //       (response) => {
  //         console.log('Client created successfully', response);
  //       },
  //       (error) => {
  //         console.error('Error creating client', error);
  //       }
  //     );
  //   }
}