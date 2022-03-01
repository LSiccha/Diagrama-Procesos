import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private eventSource = new BehaviorSubject<string>('')

  event$ = this.eventSource.asObservable()

  constructor() { }

  sendEvent(str: string){
    this.eventSource.next(str)
  }
}
