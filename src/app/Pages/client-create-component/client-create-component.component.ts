import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ClientServiceService } from '../../Services/client-service.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-client-create-component',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule, MatFormFieldModule,
    MatInputModule,
    MatCardModule],
  templateUrl: './client-create-component.component.html',
  styleUrl: './client-create-component.component.css'
})
export class ClientCreateComponentComponent {

  postCreateClientForm!: FormGroup;
  showContactForm = false;

  constructor(private clientService: ClientServiceService) { }
  createClient() {
    alert(
      this.postCreateClientForm.value.firstName + ' | ' + this.postCreateClientForm.value.firstName
    );

  }
}
