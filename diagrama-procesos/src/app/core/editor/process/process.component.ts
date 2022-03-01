import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Process} from "../../../model/process.model";
import {MatDialog} from "@angular/material/dialog";
import {ProcessFormComponent} from "../shared/process-form/process-form.component";


@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit {

  @Input() process: Process
  @Output() delete: EventEmitter<number> = new EventEmitter<number>()
  @Output() update: EventEmitter<Process> = new EventEmitter<Process>()


  constructor(
    public dialog: MatDialog
  ) {
    this.process = {}
    this.process.id = 1
    this.process.name = 'Proceso 01'
    this.process.state = 'Started'
    this.process.inputs = [
      {
        nombre: 'Input 01'
      },
      {
        nombre: 'Input 02'
      }
    ]
    this.process.tools = ['tool 01', 'tool 02']
    this.process.outputs = [
      {
        nombre: 'Output 01'
      },
      {
        nombre: 'Output 02'
      }
    ]
    this.process.duration = 15
  }

  emitDelete(){
    if (confirm('Esta seguro?')){
      this.delete.emit(this.process.id)
    }
  }

  openEditDialog(){
    const dialogRef = this.dialog.open(ProcessFormComponent, {
      data: this.process
    });

    dialogRef.afterClosed().subscribe(
      data => {
        if(data){
          const updatedProcess = data.data;
          this.update.emit(updatedProcess);
        }
      }
    )
  }

  ngOnInit(): void {
  }

}
