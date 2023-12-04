import { Button, Color, Size } from '../../interfaces/button.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rm-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input()
  public button!: Button;

  public setColorNgClass!: string;
  public setSizeNgClass!: string;

  private rmButtonClassKey = 'rm__button--';
  private configColor: {[color in Color]: string} = {
    [Color.DANGER]: `${this.rmButtonClassKey}danger`,
    [Color.DEFAULT]: `${this.rmButtonClassKey}default`,
    [Color.INFO]: `${this.rmButtonClassKey}info`,
    [Color.SUCCESS]: `${this.rmButtonClassKey}success`,
    [Color.WARNING]: `${this.rmButtonClassKey}warning`,
  };

  private configSize: {[size in Size]: string} = {
    [Size.LARGE]: `${this.rmButtonClassKey}large`,
    [Size.MEDIUM]: `${this.rmButtonClassKey}medium`,
    [Size.SMALL]: `${this.rmButtonClassKey}small`,
  };

  ngOnInit(): void {
    this.setColorAndSize(this.button.color, this.button.size);
  }

  private setColorAndSize(color: Color, size: Size): void {
    this.setColorNgClass = this.configColor[color];
    this.setSizeNgClass = this.configSize[size];
  }
}
