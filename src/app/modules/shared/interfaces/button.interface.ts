export interface Button {
  color: Color;
  size: Size;
  text: string;
}

export enum Color {
  DANGER = 'danger',
  DEFAULT = 'default',
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
}

export enum Size {
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
}
