import { UsersService } from './../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  userForm;
  errorMessages = {
    required: 'campo requerido',
    validateuser: 'usuario ya rellenado'
  }

  constructor(
    private forms: FormBuilder,
    private users: UsersService
    ) { }

  ngOnInit() {

    this.userForm = this.forms.group({
      name: this.forms.group({
        first: ['', [Validators.required]],
        last: ['', [Validators.required]]
      }),
      picture: this.forms.group({
        thumbnail: ['https://cdn.pixabay.com/photo/2014/04/02/17/07/user-307993_960_720.png'],
      }),
      email: []
    });

    this.userForm.get('name').valueChanges
      .subscribe(data => { console.log(this.userForm.controls) });
  }

  getErrors(field) {
    return this.userForm.get(field).errors ? Object.keys(this.userForm.get(field).errors) : []
  }

  submit() {
    console.log(this.userForm);
    if (this.userForm.invalid) {
      this.users.createUser();
    } 
  }

}
