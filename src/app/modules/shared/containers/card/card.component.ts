import { Component, Input } from '@angular/core';
import { Card } from '../../interfaces/card.interface';

@Component({
  selector: 'shared-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() cardConfig!: Card;

}
