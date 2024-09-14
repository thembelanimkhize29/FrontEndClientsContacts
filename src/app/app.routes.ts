import { Routes } from '@angular/router';
import { ClientsComponentComponent } from './Pages/clients-component/clients-component.component';
import { ClientCreateComponentComponent } from './Pages/client-create-component/client-create-component.component';
import { ContactFormComponentComponent } from './Pages/contact-form-component/contact-form-component.component';
import { ContactsComponentComponent } from './Pages/contacts-component/contacts-component.component';

export const routes: Routes = [
    {
        path: '',
        component: ClientsComponentComponent,
        title: 'Home page',
      },
      {
        path: 'clients',
        component: ClientCreateComponentComponent,
        title: 'clients',
      },
      {
        path: 'contact',
        component: ContactFormComponentComponent,
        title: 'contact',
      },
      {
        path: 'contacts',
        component: ContactsComponentComponent,
        title: 'contacts',
      }
];
