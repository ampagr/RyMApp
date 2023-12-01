import { Button } from '../../interfaces/button.interface';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'rm-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input()
  public button!: Button;

  @Output()
  public onClick: EventEmitter<Button> = new EventEmitter();

  public selectedButton(): void {
    this.onClick.emit(this.button);
  }
}
