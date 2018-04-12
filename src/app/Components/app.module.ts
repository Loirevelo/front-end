/* Core Module */
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

/* Modules */
import { HeaderModule } from './header/header.module';

/* Components */
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';

/* Routes */
import { APP_ROUTES } from '../Routes/app.routes';

/* Librairies */
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TranslateModule } from '@ngx-translate/core';
import { MyDatePickerModule } from 'mydatepicker';

@NgModule({
	declarations: [
		AppComponent,
		FooterComponent
	],
	imports: [
		BrowserModule.withServerTransition({ appId: 'Loirevelo' }),
		APP_ROUTES,
		HeaderModule,
		BrowserAnimationsModule,
		NoopAnimationsModule,
		BsDropdownModule.forRoot(),
		TooltipModule.forRoot(),
		ModalModule.forRoot(),
		TranslateModule.forRoot(),
		MyDatePickerModule
	],
	providers: [{ provide: LOCALE_ID, useValue: 'fr' }],
	bootstrap: [AppComponent]
})
export class AppModule { }
