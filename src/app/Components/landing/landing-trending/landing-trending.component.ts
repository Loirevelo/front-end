import { Component, OnInit } from '@angular/core';

/* Animations */
import { slideOnClick } from '../../../Animations/animations';

@Component({
	selector: 'app-landing-trending',
	templateUrl: './landing-trending.component.html',
	styleUrls: ['./landing-trending.component.scss'],
	animations: [ slideOnClick ]
})
export class LandingTrendingComponent implements OnInit {

	slideState 	: string = 'initial'
	count 		: number = 0

	constructor() { }

	ngOnInit() {
	}

	moveSlider(direction: string) {

		if (direction === 'left') {
			if (this.count) {
				this.count--
				if (this.count === 0)
					this.slideState = 'initial'
				else
					this.slideState = 'left' + this.count.toString();
			}
		} else {
			if (this.count < 3) {
				this.count++
				this.slideState = 'left' + this.count.toString();
			}
		}

		console.log(this.slideState); 

	};

}
