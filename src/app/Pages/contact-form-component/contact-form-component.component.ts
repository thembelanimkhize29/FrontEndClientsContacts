import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-form-component',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './contact-form-component.component.html',
  styleUrl: './contact-form-component.component.css'
})
export class ContactFormComponentComponent {
  postContactForm!: FormGroup;

  postContact() {

  }
}
