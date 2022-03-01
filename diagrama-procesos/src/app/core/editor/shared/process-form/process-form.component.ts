import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Form, FormBuilder, FormGroup} from "@angular/forms";
import {Process} from "../../../../model/process.model";
import {User} from "../../../../auth/shared/user.model";
import {ActivatedRoute} from "@angular/router";
import {ProcesoService} from "../../../../services/proceso.service";

@Component({
  selector: 'app-process-form',
  templateUrl: './process-form.component.html',
  styleUrls: ['./process-form.component.css']
})
export class ProcessFormComponent implements OnInit {

  currentUser: User
  options: Process[] = []
  @Output() onSubmit: EventEmitter<Process> = new EventEmitter<Process>()
  @Input() process?: Process

  form: FormGroup

  constructor(
    public dialogRef: MatDialogRef<ProcessFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Process,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private procesoService: ProcesoService
  ) {
    this.currentUser = JSON.parse(<string>localStorage.getItem('user'));
    let diagramId = this.route.snapshot.paramMap.get('id');
    this.getPossibleParents()
    this.form = this.formBuilder.group(
      {
        id: [
          this.process?.id
        ],
        diagrama: [
          {id: diagramId}
        ],
        name: [
          this.process?.name
        ],
        state: [
          'UNFINISHED'
        ],
        duration: [
          this.process?.duration
        ]
      }
    )
  }

  getPossibleParents(){
    const diagramId : number = <number>this.data.diagrama?.id
    this.procesoService.getByDiagrama(diagramId).subscribe(
      (data) => {
        this.options = data;
        console.log(data)
        //this.options = this.options.filter((p) =>{p != this.data})
        console.log(this.options.filter(proceso => proceso.id != this.data.id))
        console.log(this.options)
      }

    )
  }

  save(){
    console.log(this.form.value)
    this.dialogRef.close({data: this.form.value})
  }

  ngOnInit(): void {
    if (this.data){
      this.form.patchValue(
        {
          id: this.data.id,
          diagrama: this.data.diagrama,
          name: this.data.name,
          state: this.data.state,
          duration: this.data.duration
        }
      )
    }
  }

}
