import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-renting',
	templateUrl: './renting.component.html',
	styleUrls: ['./renting.component.scss']
})
export class RentingComponent implements OnInit {

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
	tickInterval = 4;

	constructor() { }

	ngOnInit() {
	}

}
