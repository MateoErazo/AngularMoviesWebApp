import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-rating',
  imports: [MatIcon, NgClass],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent implements OnInit{
  ngOnInit(): void {
    this.ratingArray = Array(this.maximumRating).fill(0)
  }

  @Input({required:true})
  maximumRating! : number

  @Input()
  selectedRating = 0

  previousRating = 0

  ratingArray:any[] = []

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
  }
}
