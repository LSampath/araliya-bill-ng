import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {UserService} from '../../service/user.service';
import {AuthService} from '../../service/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];
  currentUser: User;

  fullName: string;

  currentUserForm: FormGroup;
  newUserForm: FormGroup;

  constructor(private userService: UserService, private authService: AuthService, private formBuilder: FormBuilder) {

    this.currentUserForm = this.formBuilder.group({
      userName: ['', Validators.required],
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirm: ['', Validators.required]
    });

    this.newUserForm = this.formBuilder.group({
      userName: ['', Validators.required],
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirm: ['', Validators.required]
    });

    this.loadAllUsers();

    // this.authService.getUserDetails().subscribe(
    //   (result) => {
    //     this.currentUser = result;
    //     this.fullName = this.currentUser.full_name;
    //
    //     this.currentUserForm.patchValue({
    //       userName: result.user_name,
    //       fullName: result.full_name,
    //       email: result.email
    //     });
    //   }, (error1) => {
    //     console.log(error1);
    //   }
    // );
  }

  ngOnInit() {
  }

  updateCurrentUser() {
    if (this.currentUserForm.value.confirm !== this.currentUserForm.value.password) {
      alert('confirm password error');
      return;
    }

    const update: User = {
      user_id: this.currentUser.user_id,
      user_name: this.currentUserForm.value.userName,
      full_name: this.currentUserForm.value.fullName,
      email: this.currentUserForm.value.email,
      password: this.currentUserForm.value.password
    };

    this.userService.updateUser(update).subscribe(
      (result) => {
        console.log(result);
        this.loadAllUsers();
        alert('user updated');
      }, (error1) => {
        console.log(error1);
      }
    );
  }

  addNewUser() {
    if (this.newUserForm.value.confirm !== this.newUserForm.value.password) {
      alert('confirm password error');
      return;
    }

    const user: User = {
      user_id: -1,
      user_name: this.newUserForm.value.userName,
      full_name: this.newUserForm.value.fullName,
      email: this.newUserForm.value.email,
      password: this.newUserForm.value.password
    };

    this.userService.addUser(user).subscribe(
      (result) => {
        this.loadAllUsers();
        alert('new User added');
      }, (error1) => {
        console.log(error1);
      }
    );
  }

  loadAllUsers() {
    this.userService.getAllUsers().subscribe(
      (result) => {
        this.users = result;
      }, (err1) => {
        console.log(err1);
      }
    );
  }

}
