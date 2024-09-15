import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ClientCreateComponentComponent } from '../client-create-component/client-create-component.component';

@Component({
  selector: 'app-clients-component',
  standalone: true,
  imports: [RouterLink,ClientCreateComponentComponent],
  templateUrl: './clients-component.component.html',
  styleUrl: './clients-component.component.css'
})
export class ClientsComponentComponent {

}
