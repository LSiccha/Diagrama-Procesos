import { Component, OnInit } from '@angular/core';
import {DiagramaService} from "../../../services/diagrama.service";
import {Diagrama} from "../../../model/diagrama.model";
import {User} from "../../../auth/shared/user.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  currentUser?: User;

  constructor(
    private diagramaService: DiagramaService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  newDiagram(){
    this.currentUser = JSON.parse(<string>localStorage.getItem('user'))

    if (this.currentUser){
      let diagrama : Diagrama = {
        nombre: 'Nuevo Diagrama',
        user: this.currentUser
      }

      this.diagramaService.create(diagrama).subscribe(
        data => {
          console.log(data)
          this.router.navigate([`core/diagramas/${data.id}`])
        }
      )

    }

  }

}
