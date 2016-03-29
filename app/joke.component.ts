import { Component, OnInit, Input, Output, EventEmitter } from 'angular2/core';

@Component({
	selector: 'joke',
	template: `
	<div class="ui card {{color}}" [attr.id]="'chuck'+joke.id">		
		<div class="ui two buttons">
			<button #likeBtn (click)="like(likeBtn)" class="ui blue button">Like</button>
			<button #dislikeBtn (click)="dislike(dislikeBtn)" class="ui grey button">Dislike</button>
		</div>
		<div class="image">
			<img [src]="img" alt="Oh wooow~~~ :-|" />
		</div>
		<div class="content">
			<h2>{{joke.joke}}</h2>
		</div>
	</div>`,
	styles: ['h2 {font-weight: 100}']
})
export class JokeComponent implements OnInit{

	@Input() joke: any;
	@Input('arr_id') idInArr: number;

	@Output() onLike = new EventEmitter;
	@Output() onDislike = new EventEmitter;

	private color = "white"
	private img = "http://thecatapi.com/api/images/get?format=src&type=gif"

	ngOnInit(){
		this.img += "&v=" + Math.random()
	}

	changeColor(color: string){
		this.color = color
		this.onLike.emit({
			color: color
		})
	}

	like(btn){
		$(btn).transition('pulse', '200ms');

		this.color = "blue";
	}

	dislike(btn){
		var that = this;
		let func = function() {
			that.onDislike.emit({
				joke: that.joke
			});
		}
		

		$('#chuck'+this.joke.id)
			.transition({
				animation: 'fade right out',
				onComplete: func
			});		
	}


}