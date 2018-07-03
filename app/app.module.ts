import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataserviceService } from './dataservice.service';
import {FormGroup,FormBuilder,FormControl} from '@angular/forms';

import { AppComponent } from './app.component';
import { SectionComponent } from './section/section.component';
import { HeaderComponent } from './header/header.component';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionComponent,
    HeaderComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
