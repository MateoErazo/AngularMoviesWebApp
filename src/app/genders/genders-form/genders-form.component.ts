import { Component, EventEmitter, inject, Output, Input, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { firstCapitalLetter } from '../../shared/functions/validations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { GenderCreationDTO, GenderDTO } from '../genders';

@Component({
  selector: 'app-genders-form',
  imports: [MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatButtonModule, RouterLink],
  templateUrl: './genders-form.component.html',
  styleUrl: './genders-form.component.css'
})
export class GendersFormComponent implements OnInit {
  ngOnInit(): void {
    if(this.gender !== undefined){
      this.form.patchValue(this.gender)
    }
  }

  @Input()
  gender?:GenderDTO;

  @Output()
  formPosting = new EventEmitter<GenderCreationDTO>();

  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    name: ['', {validators:[Validators.required, firstCapitalLetter()]}]
  })

  getErrorNameField = ():string => {
    let name = this.form.controls.name

    if(name.hasError('required')){
      return 'The field name is required.'
    }

    if(name.hasError('firstCapitalLetter')){
      return name.getError('firstCapitalLetter').message;
    }

    return ''
  }

  saveChanges = () => {
    if(!this.form.valid){
      return;
    }

    const gender = this.form.value as GenderCreationDTO
    this.formPosting.emit(gender)
  }

}
