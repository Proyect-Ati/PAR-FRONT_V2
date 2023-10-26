import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  myForm: FormGroup;

  constructor() {
    this.myForm = new FormGroup({
      control1: new FormControl(),
      control2: new FormControl()
    });
  }
}
