/* Modules */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { BookingComponent } from '../Components/booking/booking.component'

/* Librairies */
// import { MetaGuard } from '@ngx-meta/core';

const routes: Routes = [
	{ path: '', component: BookingComponent }
];

export const BOOKING_ROUTES: ModuleWithProviders = RouterModule.forChild(routes);
