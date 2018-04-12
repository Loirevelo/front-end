/* Modules */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { ConfirmationComponent } from '../Components/confirmation/confirmation.component'

/* Librairies */
// import { MetaGuard } from '@ngx-meta/core';

const routes: Routes = [
	{ path: '', component: ConfirmationComponent }
];

export const CONFIRMATION_ROUTES: ModuleWithProviders = RouterModule.forChild(routes);
