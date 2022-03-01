import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {

  @Output() output : EventEmitter<string> = new EventEmitter<string>()

  constructor( ) {

  }


  ngOnInit(): void {
  }

  newProcess(){
    this.output.emit('proceso')
  }

  newProcessToBD(){
    this.output.emit('procesoDB')
  }

}
