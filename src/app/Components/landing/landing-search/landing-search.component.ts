import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-landing-search',
	templateUrl: './landing-search.component.html',
	styleUrls: ['./landing-search.component.scss']
})
export class LandingSearchComponent implements OnInit {

	autoTicks 	= false;
	disabled 	= false;
	invert 		= false;
	max 		= 50;
	min 		= 30;
	showTicks 	= false;
	step 		= 10;
	thumbLabel 	= false;
	value 		= 40;
	vertical 	= false;


	constructor() { }

	ngOnInit() {
	}

}
