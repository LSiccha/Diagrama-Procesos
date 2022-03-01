import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Process} from "../model/process.model";
import {environment} from "../../environments/environment";
import {Diagrama} from "../model/diagrama.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProcesoService {

  private apiBase : string = `${environment.apiBase}/procesos`

  constructor(
    private http: HttpClient
  ) { }

  create(proceso: Process){
    return this.http.post(
      this.apiBase,
      proceso
    )
  }

  getAll(){
    return this.http.get(
      this.apiBase
    )
  }

  get(id: number){
    return this.http.get(
      `${this.apiBase}/${id}`
    )
  }

  update(proceso: Process){
    return this.http.put(
      this.apiBase,
      proceso
    )
  }

  delete(id: number){
    return this.http.delete(
      `${this.apiBase}/${id}`
    )
  }

  getByDiagrama(diagrama: number) : Observable<Process[]>{
    let params = new HttpParams()
    params = params.set('diagrama', diagrama);
    return this.http.get<Process[]>(
      `${this.apiBase}/byDiagrama`,
      {
        params : params
      }
    )
  }



}
