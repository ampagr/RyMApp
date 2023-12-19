import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Button,
  Color,
  Size,
} from 'src/app/modules/shared/interfaces/button.interface';
import { DetailCharacter } from '../../interfaces/detail.interface';
import { DetailService } from '../../services/detail.service';

@Component({
  templateUrl: 'detail.component.html',
  styleUrls: ['detail.component.scss'],
})
export class DetailComponent implements OnInit {
  public characterCard!: DetailCharacter;
  public button: Button = {
    color: Color.DEFAULT,
    size: Size.MEDIUM,
    text: 'Go to Home',
    disabled: false,
  };
  private id!: string | null;

  constructor(
    private detailService: DetailService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getId();
    this.getCharacterById(Number(this.id));
  }

  public navigateToHome(): void {
    this.router.navigate(['home']);
  }

  private getId(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  private getCharacterById(id: number): void {
    this.detailService.getCharacterById(id).subscribe((detailCharacter) => {
      this.characterCard = detailCharacter;
    });
  }
}
