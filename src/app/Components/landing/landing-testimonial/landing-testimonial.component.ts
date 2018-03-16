import { Component, OnInit } from '@angular/core';
import { NguCarousel } from '@ngu/carousel';

@Component({
	selector: 'app-landing-testimonial',
	templateUrl: './landing-testimonial.component.html',
	styleUrls: ['./landing-testimonial.component.scss']
})
export class LandingTestimonialComponent implements OnInit {
	
	public carouselTwo: NguCarousel;

	constructor() { }

	ngOnInit() {
		this.carouselTwo = {
			grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
			slide: 1,
			speed: 400,
			interval: 4000,
			point: {
				visible: true,
				pointStyles: `
					.ngucarouselPoint li {
						display: inline-block;
						border-radius: 999px;
						padding: 4px;
						margin: 0 15px;
						transition: .4s ease all;
						cursor: pointer;
						background-color: #3e3d40;
						border: 1px solid #3e3d40;
						width: 10px;
					}
					.ngucarouselPoint li.active {
						background: #fff;
						border: 1px solid #009933;
						width: 10px;
						height: 10px;
						padding: 5px;
					}
				`
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
