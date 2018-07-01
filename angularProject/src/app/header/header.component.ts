import { Component, OnInit } from '@angular/core';
import { SectionComponent } from '../section/section.component';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  todaydate;
  constructor(private myservice: DataserviceService) { }

  ngOnInit() {
    this.todaydate = this.myservice.showTodayDate();
  }

}
