import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */

/* Services */

/* ROUTES */
const routes: Routes = [
	{ path: '', loadChildren: '../Components/landing/landing.module#LandingModule'},
	{ path: 'about', loadChildren: '../Components/about-us/about-us.module#AboutUsModule' },
	{ path: 'renting', loadChildren: '../Components/renting/renting.module#RentingModule' },
	{ path: 'booking', loadChildren: '../Components/booking/booking.module#BookingModule' },
	{ path: 'confirmation', loadChildren: '../Components/confirmation/confirmation.module#ConfirmationModule' }

];

export const APP_ROUTES: ModuleWithProviders = RouterModule.forRoot(routes);
