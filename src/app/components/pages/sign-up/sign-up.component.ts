import { Component, ElementRef, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';

// Models
import { UserSignup } from '../../../../models/UserSignup'
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [HeaderComponent, FormsModule, HttpClientModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})

export class SignUpComponent {

  constructor(private http: HttpClient){}

  submitSignup(userData: UserSignup){
    const {name, email, phone, password, confirmPassword} = userData

    const user = {
      name,
      email,
      phone,
      password,
      confirmPassword
    }

    this.http
      .post('http://localhost:5000/users/register', user)
      .subscribe((res) => {
        console.log(res);
      });

    console.log('Objeto de user: ', user)
  }

}
