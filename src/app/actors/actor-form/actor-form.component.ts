import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ActorCreationDTO, ActorDTO} from '../actors';
import moment from 'moment';
import { dateCannotBeInFuture } from '../../shared/functions/validations';

@Component({
  selector: 'app-actor-form',
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButtonModule, MatDatepickerModule, RouterLink],
  templateUrl: './actor-form.component.html',
  styleUrl: './actor-form.component.css'
})
export class ActorFormComponent implements OnInit {
  ngOnInit(): void {
    if(this.model !== undefined){
      this.form.patchValue(this.model)
    }
  }

  @Input()
  model? : ActorDTO;

  @Output()
  actorPosting = new EventEmitter<ActorCreationDTO>()

  private router = inject(Router)
  private formBuilder = inject(FormBuilder)
  form = this.formBuilder.group({
    name : ['', {validators: [Validators.required]}],
    birthDate : new FormControl<Date | null>(null, {
      validators: [Validators.required, dateCannotBeInFuture()]
    })
  })

  saveChanges(){
    if(!this.form.valid){
      return;
    }

    const actor = this.form.value as ActorCreationDTO
    actor.birthDate = moment(actor.birthDate).toDate()
    this.actorPosting.emit(actor)
    //this.router.navigate(['/actors'])
  }

  getErrorNameField(): string {
    let name = this.form.controls.name

    if(name.hasError('required')){
      return 'The field name is required.'
    }

    return ''
  }

  getErrorBirthDateField (): string {
    let birthDate = this.form.controls.birthDate

    if(birthDate.hasError('required')){
      return 'The field birthdate is required.'
    }

    if(birthDate.hasError('futureDate')){
      return birthDate.getError('futureDate').message
    }

    return ''
  }

}
