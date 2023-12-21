import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent, FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(private http: HttpClient) {}

  submitLogin(userData: { email: string; password: string }) {
    const { email, password } = userData;

    const user = {
      email: email,
      password: password,
    };

    console.log('Dados do usuário: ', user);

    this.http
      .post('http://localhost:5000/users/login', user)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
