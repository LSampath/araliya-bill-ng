import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.authForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.authForm.invalid) {
      alert('incomplete');
      return;
    } else {
      const username = this.authForm.value.username;
      const password = this.authForm.value.password;
      this.authService.authenticateUser(username, password).subscribe(
        (result) => {
          if (result.value === 'FAILED') {
            console.log('failed');      // clear fields and proper error
            alert('authentication failed');
          } else {
            console.log('pass');        // proper session management system
            this.authService.setAccessToken(result.value);
            this.router.navigate(['/supplier']);
          }
        },
        (error) => {
          console.log(error);         // error message
        }
      );

      this.authService.authenticateUser(username, password).subscribe(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
