import { Component, OnInit } from '@angular/core';
import {Diagrama} from "../../model/diagrama.model";
import {DiagramaService} from "../../services/diagrama.service";
import {User} from "../../auth/shared/user.model";

@Component({
  selector: 'app-diagramas',
  templateUrl: './diagramas.component.html',
  styleUrls: ['./diagramas.component.css']
})
export class DiagramasComponent implements OnInit {

  diagramas?: Diagrama[]
  curentUser: User

  uno: number = 0
  dos: number = 0
  total: number = this.uno + this.dos

  constructor(
    private diagramaService: DiagramaService
  ) {
    this.curentUser = JSON.parse(<string>localStorage.getItem('user'))
    this.getDiagramas()
  }

  ngOnInit(): void {
  }

  suma(){
    this.total = this.uno + this.dos;
  }

  getDiagramas(){
    this.diagramaService.getByUser(this.curentUser.id).subscribe(
      data => {
        this.diagramas = data
      }
    )
  }

  deleteDiagrama(id: number) {
    this.diagramaService.delete(id).subscribe(
      () =>{
        this.getDiagramas()
      }
    )
  }

  prueba() {
    console.log('asda')
  }
}
