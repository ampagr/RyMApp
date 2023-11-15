import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DetailCharacter } from '../../interfaces/detail.interface';
import { DetailService } from '../../services/detail.service';

@Component({
  templateUrl: 'detail.component.html',
  styleUrls: ['detail.component.scss'],
})
export class DetailComponent implements OnInit {
  public characterCard!: DetailCharacter;
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
