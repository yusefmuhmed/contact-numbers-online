import { Component } from '@angular/core';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent {
  formData = {
    userName: '',
    password:''
  };

  submitForm() {
    // Handle form submission logic here
    console.log(this.formData);
    // You can perform additional operations like sending data to a server
  }

}
