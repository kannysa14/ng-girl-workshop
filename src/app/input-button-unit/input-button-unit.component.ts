import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
  <input #inputElementRef
  [value]="title"              
  (keyup.enter)="submitValue(inputElementRef.value)">

  <button (click)="submitValue(inputElementRef.value)">
  Save
  </button>
  `,  
  styleUrls: ['./input-button-unit.component.scss']  
})    
export class InputButtonUnitComponent implements OnInit {
  title = 'Hello World';
  @Output() submit: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }                     

  ngOnInit(): void {
  }
  submitValue(newTitle: string): void {
    this.submit.emit(newTitle);
  }
}