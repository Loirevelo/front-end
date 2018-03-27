/* Modules */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { AboutUsComponent } from '../Components/about-us/about-us.component'

/* Librairies */
// import { MetaGuard } from '@ngx-meta/core';

const routes: Routes = [
	{ path: '', component: AboutUsComponent }
];

export const ABOUT_ROUTES: ModuleWithProviders = RouterModule.forChild(routes);
