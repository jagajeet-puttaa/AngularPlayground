import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularPlayground';
  counter : number = 0;

  incrementCounter(): void{
    this.counter++;
  }

  doubleCounter(): void{
    this.counter = this.counter+this.counter;
  }

}
