import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  showRegistrationForm = signal<boolean>(false);

  changeView() {
    this.showRegistrationForm.set(!this.showRegistrationForm());
  }

}
//22.28