import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { } from '@types/googlemaps';

@Component({
	selector: 'app-landing-search',
	templateUrl: './landing-search.component.html',
	styleUrls: ['./landing-search.component.scss']
})
export class LandingSearchComponent implements OnInit {
	
	@ViewChild('gmap') gmapElement: any;
	map: google.maps.Map;

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
		this.initMap();
	}

	initMap() {

		let coorCity = [
			{ lat: 47.3833300, lng: 0.6833300 },
			{ lat: 47.4666700, lng: -0.5500000 },
			{ lat: 47.9028900, lng: 1.9038900 },
			{ lat: 47.2172500, lng: -1.5533600 },
			{ lat: 47.2666700, lng: -0.0833300 },
			{ lat: 47.4124900, lng: 0.9826600 }
		]

		let map = {
			center: coorCity[0],
			zoom: 7,
			mapTypeId: 'terrain'
		};

		this.map = new google.maps.Map(this.gmapElement.nativeElement, map);

		for (var i = 0; i < coorCity.length; i++) {
			let marker = new google.maps.Marker ({
				position: coorCity[i]
				map: this.map
			});
		};

	}

}
