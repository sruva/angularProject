import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  statusname: string;
  desc: string;
  selectedOption: string;
  printedOption: string;

  myform: FormGroup;

  options = [
    { name: "open", value: 1 },
    { name: "In progress", value: 2 },
    { name: "close", value: 3 }
  ]
  constructor() { 
    this.statusname = " ";
    this.desc = "";
  }

  ngOnInit() {
    this.myform = new FormGroup({
      name: new FormGroup({
        statusname: new FormControl('', Validators.required), 
        desc: new FormControl('', Validators.required),
      }) 
  });
  }
  handleClick (e) {
    alert("Data saved successfully..")
  }
  handleReset() {
    this.statusname = "";
    this.desc = "";
    this.selectedOption = "";
  }
  onClickSubmit(data) {
    console.log(data);
   alert("Entered status name and description : " + data.statusname+" "+data.desc);
  }

}
