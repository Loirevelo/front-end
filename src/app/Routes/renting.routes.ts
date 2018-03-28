/* Modules */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { RentingComponent } from '../Components/renting/renting.component'

/* Librairies */
// import { MetaGuard } from '@ngx-meta/core';

const routes: Routes = [
	{ path: '', component: RentingComponent }
];

export const RENTING_ROUTES: ModuleWithProviders = RouterModule.forChild(routes);
