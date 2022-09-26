import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

export interface QuestionType{
  value:String,
  valueType:string
}

@Component({
  selector: 'app-question-component',
  templateUrl: './question-component.component.html',
  styleUrls: ['./question-component.component.css']
})

export class QuestionComponentComponent implements OnInit {
  modalRef!:BsModalRef;
  @ViewChild('template')
  templateRef!: TemplateRef<any>;
  mainForm!:FormGroup;
  formList!:FormArray;
  selectedFormName:any;

  get dynamicFormGroup(){
    return this.mainForm.get('firstForm') as FormArray;
  }

  get secondDynamicFormGroup(){
    return this.mainForm.get('secondForm') as FormArray;
  }

  get getAddQuestionFormGroup(){
    return this.mainForm.get('addQuestion') as FormArray;
  }

  public questionType: QuestionType[] = [
    { value: 'form1', valueType: 'form One' },
    { value: 'form2', valueType: 'form two' },
  ];
  
  constructor(private bsModalService:BsModalService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.mainForm = this.formBuilder.group({
      firstForm : this.formBuilder.array([]),
      secondForm : this.formBuilder.array([]),
      addQuestion : this.formBuilder.array([])
    });
    this.formList = this.mainForm.get('firstForm') as FormArray;

    this.addFirstForm();

  }


  openModal(){
    this.bsModalService.show(this.templateRef);
  }

  selectQuestionType(event:any){
    this.formList.clear();//when changes any field first of all clear the formList here
    this.selectedFormName = event.target.value;

    if(event.target.value == 'form2'){
      this.addSecondForm();
    }

    if(event.target.value == 'form1'){
      this.addFirstForm();
    }
  }

  addFirstForm(){
    //add value in first formarray by getting it as a formarray
    const firstForm = this.mainForm.get('firstForm') as FormArray;
    firstForm.push(
      this.formBuilder.group({
        paragraphQuestion:new FormControl('')
      }));
  }

  addSecondForm(){
    for(var i=1;i<=2;i++){
      this.secondDynamicFormGroup.push(new FormControl());
    }
    this.secondDynamicFormGroup.push(
      this.formBuilder.group({
        questionForCheckBox: new FormControl('')
      }));
  }
  closeModal(){
    
  }

  submitForm(){
    console.log(this.mainForm.value);
  }


  addExtraQuestion(){
    (<FormArray>this.mainForm.get('addQuestion')).push(new FormControl(null));
  }
}
