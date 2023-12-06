import { Routes } from '@angular/router';

import { LoginComponent } from './components/pages/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { SignUpComponent } from './components/pages/sign-up/sign-up.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'register',
    component: SignUpComponent
  }
];
