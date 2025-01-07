import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generic-listing',
  imports: [],
  templateUrl: './generic-listing.component.html',
  styleUrl: './generic-listing.component.css'
})
export class GenericListingComponent {
  @Input({required:true})
  listing!:any[]
}
