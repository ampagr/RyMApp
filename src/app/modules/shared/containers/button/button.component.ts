import { Button, Color, Size } from '../../interfaces/button.interface';
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
    this.onClick.emit();
  }

  public isShowed = true;
  public color = this.button?.color ? this.setColor() : '';
  public size = this.button?.size ? this.setSize() : '';

  public setColor(): string {
    switch (this.button.color) {
      case Color.DANGER:
        return 'danger';
      case Color.DEFAULT:
        return 'default';
      case Color.INFO:
        return 'info';
      case Color.SUCCESS:
        return 'success';
      case Color.WARNING:
        return 'warning';
      default:
        return 'default';
    }
  }

  public setSize(): string {
    switch (this.button.size) {
      case Size.LARGE:
        return 'large';
      case Size.MEDIUM:
        return 'medium';
      case Size.SMALL:
        return 'small';
      default:
        return 'medium';
    }
  }

}
