import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-contact-form-component',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule,RouterOutlet,MatToolbarModule, MatButtonModule, MatIconModule,  MatFormFieldModule,
    MatInputModule,
    MatCardModule],
  templateUrl: './contact-form-component.component.html',
  styleUrl: './contact-form-component.component.css'
})
export class ContactFormComponentComponent {
  postContactForm!: FormGroup;
  showClientForm = false;


  postContact() {

  }
}
