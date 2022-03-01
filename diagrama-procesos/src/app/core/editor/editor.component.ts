import { Component, OnInit } from '@angular/core';
import {SharedService} from "./shared/shared.service";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
  }

  newProcess(str: string){
    this.sharedService.sendEvent(str)
    console.log('Editor: '+ str)
  }

}
