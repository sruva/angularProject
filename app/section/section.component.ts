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
  contact: string;
  myform: FormGroup;
  
  taskdetails  = [ 
    {
    statusname: "",
    desc: "",
    selectedOption: ""
    }
  ]
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
    console.log(this.taskdetails);
    this.taskdetails.push({
    statusname: this.statusname,
    desc: this.desc,
    selectedOption: this.selectedOption
    });
    this.statusname = "";
    this.desc = "";
    this.selectedOption = ""
    console.log(this.taskdetails);
  }
  private contactList: Array<string> = [];
  public store(){
    this.contactList.push(this.contact);
    this.contact = null;
}

}
