import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/* Components */
import { LandingComponent } from './landing.component';

/* Services */

/* Directive */

/* Librairies */
import { NguCarouselModule } from '@ngu/carousel';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatSliderModule } from '@angular/material/slider';

/* Routes */
import { LANDING_ROUTES } from '../../Routes/landing.routes';
import { LandingDiscoverComponent } from './landing-discover/landing-discover.component';
import { LandingSearchComponent } from './landing-search/landing-search.component';
import { LandingTestimonialComponent } from './landing-testimonial/landing-testimonial.component';
import { LandingTrendingComponent } from './landing-trending/landing-trending.component';
import { LandingPartnerComponent } from './landing-partner/landing-partner.component';

@NgModule({
	imports: [
		LANDING_ROUTES,
		CommonModule,
		RouterModule,
		FormsModule,
		NguCarouselModule,
		MatButtonModule,
		MatCheckboxModule,
		MatSliderModule
	],
	declarations: [
		LandingComponent,
		LandingDiscoverComponent,
		LandingSearchComponent,
		LandingTestimonialComponent,
		LandingTrendingComponent,
		LandingPartnerComponent
	],
	exports:[
		LandingComponent,
		LandingDiscoverComponent,
		MatButtonModule,
		MatCheckboxModule,
		MatSliderModule
	],
	providers: []
})
export class LandingModule { }
