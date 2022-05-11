import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output() incrementCounterEvent = new EventEmitter();
  @Output() doubleCounterEvent = new EventEmitter();

  showCounter = false;
  showForm = false;
  showTemplate = false;
  showLogin = false;

  userForm! : FormGroup;

  heros = [
    {
      name : "IronMan",
      universe: "marvel"
    },
    {
      name : "Captain America",
      universe: "marvel"
    },
    {
      name : "Hawkeye",
      universe: "marvel"
    },
    {
      name : "Hulk",
      universe: "marvel"
    },
    {
      name : "Thor",
      universe: "marvel"},
    {
      name : "BlackWidow",
      universe: "marvel"
    },
    {
      name : "Batman",
      universe: "dc"},
    {
      name : "Joker",
      universe: "dc"
    },
  ];

  constructor() { }

  ngOnInit(): void {
      this.userForm = new FormGroup({
        username : new FormControl("",[Validators.required,Validators.minLength(3),Validators.maxLength(25)]),
        password : new FormControl("",Validators.required),
        confirmPassword : new FormControl("",Validators.required)
      })
  }

  onSubmit(): void{
    console.log(this.userForm.value);
  }

  onReset(): void{
    this.userForm.reset();
  }

  incrementCounterEmitEvent(): void{
    this.incrementCounterEvent.emit();
  }

  doubleCounterEmitEvent(): void{
    this.doubleCounterEvent.emit();
  }

  toggleCounter(): void{
    this.showCounter = !this.showCounter;
  }

  toggleUserForm(): void{
    this.showForm = !this.showForm;
  }

  toggleTemplate(): void{
    this.showTemplate = !this.showTemplate;
  }

  toggleLogin(): void{
    this.showLogin = !this.showLogin;
  }
}
