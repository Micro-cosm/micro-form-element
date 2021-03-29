

import {	async				} from '@angular/core/testing';
import {	ComponentFixture	} from '@angular/core/testing';
import {	TestBed				} from '@angular/core/testing';
import {	PrivateComponent	} from './private.component';

describe('PublicComponent', () => {
	let component:	PrivateComponent;
	let fixture:	ComponentFixture<PrivateComponent>;

	beforeEach( async(() => { TestBed.configureTestingModule({ declarations: [PrivateComponent]}).compileComponents();}));
	beforeEach(() => {
		fixture		= TestBed.createComponent( PrivateComponent );
		component	= fixture.componentInstance;
		fixture.detectChanges();
	});
	
	it('should create', () => { expect( component ).toBeTruthy()})
});
