/*** CUSTOM ANIMATIONS ***/
import { trigger, state, animate, style, transition, keyframes, AnimationEntryMetadata } from '@angular/core';


/* Slide Right/Left dialog */
export const slideOnClick = trigger('slideOnClick', [
			state('initial', style({
				position: 'relative', left: '0px', right: '0px'
			})),
	    	state('left1', style({
	    		position: 'relative', left: '-290px', right: '0px'
	    	})),
	    	state('left2', style({
	    		position: 'relative', left: '-580px', right: '0px'
	    	})),
	    	state('left3', style({
	    		position: 'relative', left: '-870px', right: '0px'
	    	})),
	    	transition('* => *', animate('250ms'))
	    ]);