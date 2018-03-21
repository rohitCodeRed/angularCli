import { Injectable } from '@angular/core';
import { Heros } from './heros';
import { HEROES } from './mock-hero';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
//import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
//import 'rxjs/add/operator/map';

@Injectable()

// @NgModule({
//   providers: [Http]
//   })

export class HeroService {
private _headers = {headers: new HttpHeaders().set('Content-Type', 'application/json')};
  constructor(private messageService: MessageService,private http:HttpClient) { }

  getHeroes(): Observable<any> {
    this.messageService.add('HeroService: fetched heroes');
    //return of(HEROES);
    return this.http.get('http://localhost:3000/api/users', this._headers)
      .pipe(map((data:Heros) => data),
      catchError(this.handleError('getHeroes', []))
    );
    // .map((res:Response) => res.json());
  }
  getHero(id: number): Observable<Heros> {
    // Todo: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  private handleError<T> (operation = 'operation', result?: T) {
   return (error: any): Observable<T> => {

     // TODO: send the error to remote logging infrastructure
     console.error(error); // log to console instead

     // TODO: better job of transforming error for user consumption
     console.log(`${operation} failed: ${error.message}`);

     // Let the app keep running by returning an empty result.
     return of(result as T);
   };
 }

}
