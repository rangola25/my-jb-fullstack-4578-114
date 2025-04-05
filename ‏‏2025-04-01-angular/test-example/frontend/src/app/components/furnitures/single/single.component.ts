import { Component, input, output } from '@angular/core';
import { Furniture } from '../../../models/furnitures/furniture.model';

@Component({
  selector: 'app-single',
  imports: [],
  templateUrl: './single.component.html',
  styleUrl: './single.component.css'
})
export class PostComponent {

    constructor (
    ) {

    }

    furniture = input<Furniture>()


}
