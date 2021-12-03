import { Component } from '@angular/core';
import { TodoItem } from './interfaces/todo-item';

@Component({
  selector: 'app-root',
  template: `
  <h1>
    Welcome to {{ title }}!
  </h1>

  <app-list-manager></app-list-manager>
`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list';
  todoList: TodoItem[] = [
    {title: 'install NodeJS'},
    {title: 'install Angular CLI'},
    {title: 'create new app'},
    {title: 'serve app'},
    {title: 'develop app'},
    {title: 'deploy app'},
  ];

  addItem(title: string) {    
    this.todoList.push({ title });
  }
}
