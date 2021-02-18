import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators,NgForm } from "@angular/forms";
import { UserService } from "../../../services/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  formGroup: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }


  onSubmit() {
    console.log(this.formGroup);
    this.formGroup.reset();
}

}
