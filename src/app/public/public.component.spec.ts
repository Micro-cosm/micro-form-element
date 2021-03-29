

import {	async				} from '@angular/core/testing';
import {	ComponentFixture	} from '@angular/core/testing';
import {	TestBed				} from '@angular/core/testing';
import {	PublicComponent		} from './public.component';

describe('PublicComponent', () => {
	let component:	PublicComponent;
	let fixture:	ComponentFixture<PublicComponent>;
	beforeEach( async(() => { TestBed.configureTestingModule({ declarations: [PublicComponent]}).compileComponents();}));
	beforeEach(() => {
		fixture		= TestBed.createComponent( PublicComponent );
		component	= fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => { expect( component ).toBeTruthy()})
});
