import { Component, Input, OnInit } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import { JokeComponent } from './joke.component';

@Component({
    selector: 'chuck',
    template: `
    <h1 class="ui center aligned header">CHuck JOkes</h1>
    <div class="ui grid centered container">
    	<div *ngIf="! chucks.length > 0">
			Loading lists of Chuck Norris...
    	</div>
    	<joke class="ui row" *ngFor="#chuck of chucks" [joke]="chuck" [arr_id]="index" (onDislike)="removeIt($event)"></joke>
    	<button (click)="loadMore()" class="ui labeled icon button">
	      <i class="heart icon"></i>
	      Gimme some more Chuck and Cats
	    </button>
    </div>
    `,
    providers: [Http, HTTP_PROVIDERS],
    directives: [JokeComponent]
})
export class AppComponent implements OnInit{

	private _apiBase = 'http://api.icndb.com/jokes/'
	private chucks = []
	private _observable;


	constructor(private http: Http){}


	ngOnInit(){
		this._observable = this.http.get(this._apiBase + 'random/8?escape=javascript')
			.retryWhen(err => err.delay(2000))
			.catch(function(error: Response) {
				// in a real world app, we may send the error to some remote logging infrastructure
				// instead of just logging it to the console
				console.error(error);
				return Observable.throw(error.json().error || 'Server error');
			});

		this._observable.subscribe(
				jokes => this.insert(jokes.json().value)
			);
	}

	insert(jokes: Array<Object>){
		for (var i = 0; i < jokes.length; i++){
			this.chucks.push(jokes[i]);
		}
	}

	loadMore(){
		this._observable
			.subscribe(jokes => this.insert(jokes.json().value));
	}

	removeIt(evt){
		let id = this.chucks.findIndex(j => j == evt.joke);
		this.chucks.splice(id, 1);
	}

}