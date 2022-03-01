import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpParams} from "@angular/common/http";
import {User} from "../auth/shared/user.model";
import {Observable} from "rxjs";
import {Diagrama} from "../model/diagrama.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DiagramaService {

  private apiBase : string = `${environment.apiBase}/diagrama`

  constructor(
    private http: HttpClient
  ) { }

  create(diagrama: Diagrama) : Observable<Diagrama>{
    return this.http.post<Diagrama>(
      this.apiBase,
      diagrama
    )
  }

  getByUser(user : number) : Observable<Diagrama[]>{
    let params = new HttpParams();
    params = params.set('user',user);
    return this.http.get<Diagrama[]>(
      `${this.apiBase}/byUser`,
      {params: params}
    )
  }

  delete(id: number): Observable<any> {
    return this.http.delete(
      `${this.apiBase}/${id}`
    )
  }
}
