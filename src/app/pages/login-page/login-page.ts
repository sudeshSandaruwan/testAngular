import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../Service/auth-service';
import { FormControl, FormGroup, Validators , ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPage implements OnInit {
  // loginForm: any;
   loginForm!: FormGroup;
    token:any
  
  constructor(
    private auth:AuthService
  
  ){  }

 

  

  ngOnInit(): void {
   
    this.loginForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  }

userLogin() {
  if (this.loginForm.valid) {
    const userModel = {
      userName: this.loginForm.value.userName,
      password: this.loginForm.value.password
    };
    this.auth.login(userModel).subscribe((val: any) => {
      console.log(val);
      this.token=val.token
      console.log(val.token)
      sessionStorage.setItem('token',this.token)
    });
  } else {
    console.log('Form is invalid');
  }
}


}
