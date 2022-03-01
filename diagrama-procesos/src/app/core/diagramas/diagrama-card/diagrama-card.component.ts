import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Diagrama} from "../../../model/diagrama.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-diagrama-card',
  templateUrl: './diagrama-card.component.html',
  styleUrls: ['./diagrama-card.component.css']
})
export class DiagramaCardComponent implements OnInit {

  @Input() diagrama?: Diagrama

  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>()

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  delete() {
    this.onDelete?.emit(this.diagrama?.id)
    console.log('asd')
  }

}
