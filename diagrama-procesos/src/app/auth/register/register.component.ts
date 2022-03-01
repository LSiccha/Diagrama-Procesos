import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/auth.service";
import {Router} from "@angular/router";
import {User} from "../shared/user.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private authService : AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  register(username: any) {
    this.authService.register(username).subscribe(
      data => {
        this.saveUserData(data);

        let user = localStorage.getItem("user")
        if (typeof user === "string") {
          console.log(JSON.parse(user))
        }

        this.router.navigate(['core/diagramas/1'])
      }
    )
  }

  saveUserData(user: User){
    localStorage.setItem("user", JSON.stringify(user))
  }
}
