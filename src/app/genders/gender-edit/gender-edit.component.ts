import { Component, Input, numberAttribute } from '@angular/core';
import { GendersFormComponent } from "../genders-form/genders-form.component";
import { GenderCreationDTO, GenderDTO } from '../genders';

@Component({
  selector: 'app-gender-edit',
  imports: [GendersFormComponent],
  templateUrl: './gender-edit.component.html',
  styleUrl: './gender-edit.component.css'
})
export class GenderEditComponent {
  @Input({transform: numberAttribute})
  id!:number;

  genderDummy : GenderDTO = {id:1, name:'Action'}

  saveChanges = (gender: GenderCreationDTO) => {
    console.log(gender)
  }

}
