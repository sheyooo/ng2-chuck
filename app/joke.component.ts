import { Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({
	selector: 'joke',
	template: `
	<div class="ui card {{color}}">		
		<div class="ui two buttons">
			<button (click)="changeColor('red')" class="ui blue button">Like</button>
			<button (click)="changeColor('black')" class="ui black button">Dislike</button>
		</div>
		<p class="content">
			{{joke.joke}}
		</p>	
	</div>`
	//FIND OUT ABOUT ANGULAR 2 TRANSCLUSION TO SET TO TRUE
	, styles: [`p {font-size: 20px}`]
})
export class JokeComponent{
	@Input() joke: Object;
	@Output() onLike: EventEmitter<Object>;
	private color = "white"

	changeColor(color: string){
		this.color = color
		this.onLike.emit({
			color: color
		})
	}
}