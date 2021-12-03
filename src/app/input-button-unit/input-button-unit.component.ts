import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <p>
      input-button-unit works!
      The title is: {{ title }}
    </p>

    <input #box [value]="title"
       (keyup.enter)="changeTitle(box.value)">
    <button (click)="changeTitle('Button Clicked!')">Save</button>
  `,
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello World';

  constructor() { }

  ngOnInit(): void {
  }
  changeTitle(newTitle: string): void {
    this.title = newTitle;
  }
}