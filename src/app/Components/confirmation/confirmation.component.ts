import { Component, OnInit } from '@angular/core';
import { IMyDpOptions } from 'mydatepicker';

@Component({
	selector: 'app-confirmation',
	templateUrl: './confirmation.component.html',
	styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

	public myDatePickerOptions: IMyDpOptions = {
        // other options...
        dateFormat: 'dd.mm.yyyy',
        showTodayBtn: true,
        selectorWidth: '250px'
    };

    public date1: any = { date: { year: 2018, month: 10, day: 9 } };
    public date2: any = { date: { year: 2018, month: 10, day: 15 } };

    noChild 		: boolean = true
    checkedChild 	: number
    displayTemp 	: number = 1;

	constructor() { }

	ngOnInit() {
	}

	checkChild(value: number) {
		if (value) {
			this.checkedChild 	= value
			this.noChild 		= false
		} else {
			this.checkedChild 	= value
			this.noChild 		= true
		}
		console.log(this.checkedChild);
		console.log(this.noChild);
	}

	switchTemp(value: number) {
		if (value) {
			this.displayTemp 	= value 
		}
	}
}
