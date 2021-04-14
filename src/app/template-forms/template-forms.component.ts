import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { SubjectssService } from '../subjectss.service';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {
  reactiveFormData:any;
  constructor(private sub:SubjectssService) { }

  ngOnInit(): void {
  }
  onClick()
  {
    console.log('button clicked');
    this.sub.getSubject().subscribe((data:any)=>{
      this.reactiveFormData = (data);
    })
    
    console.log("data received is ",typeof this.reactiveFormData)
  }  
 
}
