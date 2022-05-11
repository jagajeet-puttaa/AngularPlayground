import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  check  = true;
  showHeros = true;

  @Input() universe : any;
  @Input() superheros: any;

  constructor() { }

  ngOnInit(): void {
  }

  toggleCheck(): void{
    this.check = !this.check;
  }

  toggleHeros(): void{
    this.showHeros = !this.showHeros;
  }

}
