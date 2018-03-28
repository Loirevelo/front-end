import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/* Components */
import { RentingComponent } from './renting.component';

/* Services */

/* Directive */

/* Librairies */
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatSliderModule } from '@angular/material/slider';

/* Routes */
import { RENTING_ROUTES } from '../../Routes/renting.routes';

@NgModule({
	imports: [
		RENTING_ROUTES,
		CommonModule,
		RouterModule,
		FormsModule,
		MatButtonModule,
		MatCheckboxModule,
		MatSliderModule
	],
	declarations: [
		RentingComponent,
	],
	exports:[
		RentingComponent,
		MatButtonModule,
		MatCheckboxModule,
		MatSliderModule
	],
	providers: []
})
export class RentingModule { }
