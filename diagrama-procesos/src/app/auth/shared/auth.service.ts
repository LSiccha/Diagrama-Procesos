import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiBase : string = `${environment.apiBase}/user`

  constructor(
    private http: HttpClient
  ) { }

  login(username: string) : Observable<any>{
    return this.http.post<any>(
      `${this.apiBase}/login`,
      username
    )
  }

  register(username: string) : Observable<any>{
    return this.http.post<any>(
      `${this.apiBase}/register`,
      username
    )
  }
}
