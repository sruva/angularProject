import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  
  stat: string = 'My first life goal';
  goals = [];
  fname: string;
  lname: string;
  taskdata = [] = [ 
  {
    fname: '',
    lname: ''
  }
];

  constructor() {  }

  ngOnInit() {
    console.log(this.stat);
  }
  addItem(){
    this.goals.push(this.stat);
    console.log(this.goals)
    this.stat = '';
  }
  disp(){
    console.log(this.taskdata);
    this.taskdata.push({
    fname: this.fname,
    lname: this.lname
    });
    this.fname = "";
    this.lname = "";
    console.log(this.taskdata);
  }
}
