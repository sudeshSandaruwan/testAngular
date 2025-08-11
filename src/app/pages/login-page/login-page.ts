import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../Service/auth-service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPage implements OnInit {

  
  constructor(
    private auth:AuthService
  
  ){  }

  loginForm = new FormGroup({
    username:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })

  ngOnInit(): void {
   
  }

  userLogin(){
    this.auth.login(this.loginForm.value.username).subscribe((val:any)=>{
      console.log(val)
    })
  }

}
