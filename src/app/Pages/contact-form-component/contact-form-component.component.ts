import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { ContactServiceService } from '../../Services/contact-service.service';
import { Contact } from '../../Interfaces/contact';


@Component({
  selector: 'app-contact-form-component',
  standalone: true,
  imports: [RouterLink,CommonModule, MatDividerModule, ReactiveFormsModule,RouterOutlet,MatToolbarModule, MatButtonModule, MatIconModule,  MatFormFieldModule,
    MatInputModule,
    MatCardModule],
  templateUrl: './contact-form-component.component.html',
  styleUrl: './contact-form-component.component.css'
})
export class ContactFormComponentComponent {
  postContactForm!: FormGroup;
  showClientForm = false;

  @ViewChild('clientsEnd', { static: false }) clientsEnd!: ElementRef;

  constructor(private fb: FormBuilder, private contactService: ContactServiceService) {
    this.postContactForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      clients: this.fb.array([])
    });
  }
  get clients(): FormArray {
    return this.postContactForm.get('clients') as FormArray;
  }

  createClient(): FormGroup {
    return this.fb.group({
      clientName: ['', Validators.required]
    });
  }

  addClient(): void {
    this.clients.push(this.createClient());
    setTimeout(() => this.scrollToBottom(), 0);
  }

  removeClient(index: number): void {
    this.clients.removeAt(index);
  }

  scrollToBottom(): void {
    this.clientsEnd.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  postContact(): void {
    if (this.postContactForm.valid) {
      console.log(this.postContactForm.value);
    }
  }

  // postContact(): void {
  //   if (this.postContactForm.valid) {
  //     const contactData: Contact = {
  //       name: this.postContactForm.get('name').value,
  //       surname: this.postContactForm.get('surname').value,
  //       email: this.postContactForm.get('email').value,
  //       clients: [],
  //       id: 0
  //     };

  //     
  //     this.contactService.postContact(contactData).subscribe(
  //       (response) => {
  //         console.log('Contact created successfully', response);
  //       },
  //       (error) => {
  //         console.error('Error creating contact', error);
  //       }
  //     );
  //   } else {
  //     console.log('Form is invalid');
  //   }
  // }
  
}
