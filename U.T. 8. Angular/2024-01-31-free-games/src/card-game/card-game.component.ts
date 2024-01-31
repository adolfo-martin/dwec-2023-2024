import { Component, Input, OnInit } from '@angular/core';
import { GamesService } from '../services/games.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { GameT } from '../entities/game.type';

@Component({
  selector: 'card-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-game.component.html',
  styleUrl: './card-game.component.css'
})
export class CardGameComponent implements OnInit {

  @Input('game') public _game: string = '';

  game$: Observable<GameT> = {} as Observable<GameT>;

  constructor(private _service: GamesService) {
  }

  ngOnInit(): void {
    this.game$ = this._service.getGameById$(this._game);
  }

}
