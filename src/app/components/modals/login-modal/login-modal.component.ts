import { Component} from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css'],
})

export class LoginModalComponent {
  myForm: FormGroup;
  constructor(private login:LoginService, private fb:FormBuilder, private data:DataService) {
    this.myForm = this.fb.group({
      username: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(12), Validators.pattern(/^[a-zA-Z\d]*$/)]],
      password: ['',[Validators.required, Validators.minLength(5), Validators.maxLength(12),  Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z\d]{1,}$/)]]
    });
  }
  logged: boolean = this.data.logData[0];
  displayStyle: string = 'none';

  openModal(): void {
    this.displayStyle = 'block';
  }

  closeModal(): void {
    this.displayStyle = 'none';
  }

  logIn(): void{
    this.displayStyle = 'none';
    this.login.LoginEvent(true);
    this.myForm.reset();
    this.logged = true;
  }
  

  logOut(): void {
    this.login.LoginEvent(false);
    this.logged = false;
  }

  reloadData(): void {
    this.data.reloadData();
  }
}
