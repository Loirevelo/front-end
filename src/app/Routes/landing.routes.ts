/* Modules */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { LandingComponent } from '../Components/landing/landing.component'

/* Librairies */
// import { MetaGuard } from '@ngx-meta/core';

const routes: Routes = [
	{ path: '', component: LandingComponent }
];

export const LANDING_ROUTES: ModuleWithProviders = RouterModule.forChild(routes);
