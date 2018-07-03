import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor() { }

  showTodayDate() {
    let ndate = new Date();
    return ndate;
 }
 
}
