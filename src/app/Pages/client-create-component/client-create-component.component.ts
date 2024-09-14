import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ClientServiceService } from '../../Services/client-service.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-client-create-component',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './client-create-component.component.html',
  styleUrl: './client-create-component.component.css'
})
export class ClientCreateComponentComponent {

  postCreateClientForm!: FormGroup;
  constructor(private clientService: ClientServiceService) { }
  createClient() {
    alert(
      this.postCreateClientForm.value.firstName + ' | ' + this.postCreateClientForm.value.firstName
    );
  
  }
}
