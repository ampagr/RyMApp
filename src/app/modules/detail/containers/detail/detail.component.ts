import { Component, OnInit } from '@angular/core';
import { DetailService } from '../../services/detail.service';
import { DetailCharacter } from '../../interfaces/detail.interface';

@Component({
  templateUrl: 'detail.component.html',
  styleUrls: ['detail.component.scss']
})
export class DetailComponent implements OnInit {

  public characterCard!: DetailCharacter;

  constructor( private detailService: DetailService ) {}

  ngOnInit(): void {
    this.getCharacterById(1);
  }

  private getCharacterById( id: number ): void {
    this.detailService.getCharacterById(id).subscribe((detailCharacter) => {
      this.characterCard = detailCharacter;
      console.log(this.characterCard);
    });
  }
}
