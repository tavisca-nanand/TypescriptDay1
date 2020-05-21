import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-unique-directive-component',
    template:`
  
      <input type="text" [prdId]='text' [(ngModel)]='text'>
    `
  
  })
  export class UniqueDirectiveComponent implements OnInit {
    text: string;
    constructor() {
      this.text = '';
    }
    ngOnInit(): void { }
  }