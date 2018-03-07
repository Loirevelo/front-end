import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Components */
import { HeaderComponent } from './header.component';

/* Services */

/* Directive */

/* Librairies */

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		FormsModule,
		BrowserAnimationsModule
	],
	declarations: [
		HeaderComponent
	],
	exports:[
		HeaderComponent
	],
	providers: []
})
export class HeaderModule { }
