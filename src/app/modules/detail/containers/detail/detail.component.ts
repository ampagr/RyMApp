import { Component, OnInit } from '@angular/core';
import { DetailService } from '../../services/detail.service';

@Component({
  templateUrl: 'detail.component.html',
  styleUrls: ['detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor( private detailService: DetailService ) {}

  ngOnInit(): void {
    this.getCharacterById(1);
  }

  private getCharacterById( id: number ): void {
    this.detailService.getCharacterById(id).subscribe((character) => {
      console.log(character);
    });
  }
}
