import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, map } from 'rxjs';
import { GameT } from '../entities/game.type';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private _http: HttpClient) { }

  public getGameById$(gameId: string): Observable<GameT> {
    const url = `http://127.0.0.1:3000/game/${gameId}`;
    return this._http.get(url).pipe(
      // @ts-ignore
      map(response => response.game),
      // map(game => ({ id: game.id, title: game.title, image: game.thumbnail, genre: game.genre, releaseData: game.release_date }))
      map(({ id, title, thumbnail: image, genre, release_date: releaseDate }) => ({ id, title, image: `http://127.0.0.1:3000${image}`, genre, releaseDate })),
      delay(3000)
    );
  }
}
