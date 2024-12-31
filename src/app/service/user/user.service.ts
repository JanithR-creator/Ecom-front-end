import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl="http://localhost:8081/"
  constructor(private http: HttpClient) {

  }

  public saveUser(userName:any,password:any,address:any):Observable<any>{
    return  this.http.post(this.baseUrl+"api/v1/users/signup",{
      userName:userName,
      password:password,
      address:address
    })
  }

  public login(userName:any,password:any):Observable<any>{
    return this.http.post(this.baseUrl+"login",{
      username:userName,
      password:password
    })
  }
}
