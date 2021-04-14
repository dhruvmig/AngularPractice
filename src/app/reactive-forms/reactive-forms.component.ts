import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { SubjectssService } from '../subjectss.service';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  display?:boolean;
  constructor(private sub:SubjectssService) { }

  ngOnInit(): void {
  }

  infoForm = new FormGroup({
    name :  new FormControl(''),
    email: new FormControl(''),
    mobile : new FormControl('')
  });

  onSubmit(){
    this.display = true;
    // console.log(this.infoForm,this.infoForm.controls.name.value)
    this.sub.createSubject(this.infoForm.controls);
    // this.sub.getSubject();
  }

}
