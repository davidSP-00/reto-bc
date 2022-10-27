import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    })
  }
  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.getRawValue())

      localStorage.setItem('token', JSON.stringify(
        {
          exp: Math.floor(new Date().getTime() / 1000 + 900)
        }
      ))
      this.router.navigateByUrl('/grid')

    }
  }

}
