import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SubjectssService {
   subject = new BehaviorSubject<Object>("Nothing submitted in reactive forms as of now");
  constructor(private http : HttpClient) { }

  createSubject(data:any)
  {
    console.log('createed datea is ',data.name.value)
      this.subject.next(data.name.value);
  }
  getSubject()
  {
    // console.log("in get subject");
    return this.subject;
  }
  getDataObserval( no:number, start:number)
  {
    return this.http.get(`https://hub.dummyapis.com/employee?noofRecords=${no}&idStarts=${start}`);
  }
}
