import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Pages/header/header.component';
import { FooterComponent } from './Pages/footer/footer.component';
import { ClientsComponentComponent } from './Pages/clients-component/clients-component.component';
import { ClientCreateComponentComponent } from './Pages/client-create-component/client-create-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent,ClientsComponentComponent,RouterLink,
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ClientsContactsProj';
}
