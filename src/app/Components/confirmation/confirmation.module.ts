import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/* Components */
import { ConfirmationComponent } from './confirmation.component';

/* Services */

/* Directive */

/* Librairies */
import { MyDatePickerModule } from 'mydatepicker';

/* Routes */
import { CONFIRMATION_ROUTES } from '../../Routes/confirmation.routes';

@NgModule({
	imports: [
		CONFIRMATION_ROUTES,
		CommonModule,
		RouterModule,
		FormsModule,
		MyDatePickerModule
	],
	declarations: [
		ConfirmationComponent,
	],
	exports:[
		ConfirmationComponent
	],
	providers: []
})
export class ConfirmationModule { }
