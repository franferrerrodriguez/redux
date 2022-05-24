import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, 
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });
  }

  submit() {
    if (this.form.invalid) return;
    const { email, password } = this.form.value;
    this.authService.createUser(email, password)
      .then(data => {
        console.log(data);
        this.router.navigate(['/']);
      })
      .catch(err => {
        alert(err);
      });
  }

}
