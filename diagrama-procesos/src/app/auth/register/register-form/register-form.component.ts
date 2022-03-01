import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  @Output() onSubmit : EventEmitter<any> = new EventEmitter<any>()

  form: FormGroup = this.formBuilder.group({
    username: [
      '', [
        Validators.required,
        Validators.minLength(5)
      ]
    ]
  })

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  login(){
    this.onSubmit.emit(this.form.value)
  }

}



