import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/* Components */
import { AboutUsComponent } from './about-us.component';

/* Services */

/* Directive */

/* Librairies */

/* Routes */
import { ABOUT_ROUTES } from '../../Routes/about-us.routes';

@NgModule({
	imports: [
		ABOUT_ROUTES,
		CommonModule,
		RouterModule,
		FormsModule
	],
	declarations: [
		AboutUsComponent
	],
	exports:[
		AboutUsComponent
	],
	providers: []
})
export class AboutUsModule { }
