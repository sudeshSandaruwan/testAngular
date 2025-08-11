import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config/config-service';

@Injectable({
  providedIn: 'root'
})


export class AuthService  {

  constructor(
    private http:HttpClient,
    private config:ConfigService
  ) {

  }


  login(User:any){
    return this.http.post(this.config.BASE_URL+"log/login",User);
  }
}
