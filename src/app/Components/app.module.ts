/* Core Module */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

/* Modules */
import { HeaderModule } from './header/header.module';

/* Components */
import { AppComponent } from './app.component';

/* Routes */
import { APP_ROUTES } from '../Routes/app.routes';

/* Librairies */
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule.withServerTransition({ appId: 'Loirevelo' }),
		APP_ROUTES,
		HeaderModule,
		BrowserAnimationsModule,
		NoopAnimationsModule,
		BsDropdownModule.forRoot(),
		TooltipModule.forRoot(),
		ModalModule.forRoot()
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
