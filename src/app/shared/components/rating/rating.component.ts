import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-rating',
  imports: [MatIcon, NgClass],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent{

  @Input({required:true, transform: (value:number) => Array(value).fill(0) })
  maximumRating! : number[]

  @Input()
  selectedRating = 0

  @Output()
  ratingValue = new EventEmitter<number>()

  previousRating = 0

  mouseEnterHandler = (index: number) => {
    this.selectedRating = index + 1
  }

  mouseLeaveHandler = () => {
    if(this.selectedRating != 0) {
      this.selectedRating = this.previousRating
    }else{
      this.selectedRating = 0
    }
  }

  clickHandler = (index: number) => {
    this.selectedRating = index + 1
    this.previousRating = this.selectedRating
    this.ratingValue.emit(this.selectedRating);
  }
}
