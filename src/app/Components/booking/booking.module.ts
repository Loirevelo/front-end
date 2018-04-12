import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/* Components */
import { BookingComponent } from './booking.component';

/* Services */

/* Directive */

/* Librairies */

/* Routes */
import { BOOKING_ROUTES } from '../../Routes/booking.routes';
import { BookingInfoComponent } from './booking-info/booking-info.component';

@NgModule({
	imports: [
		BOOKING_ROUTES,
		CommonModule,
		RouterModule,
		FormsModule
	],
	declarations: [
		BookingComponent,
		BookingInfoComponent
	],
	exports:[
		BookingComponent
	],
	providers: []
})
export class BookingModule { }
