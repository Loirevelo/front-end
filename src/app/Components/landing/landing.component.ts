import { Component, OnInit } from '@angular/core';
import { NguCarousel } from '@ngu/carousel';

@Component({
	selector: 'app-landing',
	templateUrl: './landing.component.html',
	styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

	public carouselOne: NguCarousel;

	constructor() { }

	ngOnInit() {
		this.carouselOne = {
			grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
			slide: 1,
			speed: 400,
			interval: 4000,
			point: {
				visible: true
			},
			load: 2,
			touch: true,
			loop: true,
			custom: 'banner'
		}
	}

	public myfunc(event: Event) {
		// carouselLoad will trigger this funnction when your load value reaches
		// it is helps to load the data by parts to increase the performance of the app
		// must use feature to all carousel
	}

}
