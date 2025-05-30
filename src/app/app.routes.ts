import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyfamilyComponent } from './my-family/my-family.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'myfamily', component: MyfamilyComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' },
];