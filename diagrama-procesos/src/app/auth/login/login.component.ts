import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/auth.service";
import {User} from "../shared/user.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService : AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(username: any) {
    this.authService.login(username).subscribe(
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
