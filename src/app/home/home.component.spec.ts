

import {	async				} from '@angular/core/testing';
import {	ComponentFixture	} from '@angular/core/testing';
import {	TestBed				} from '@angular/core/testing';
import {	HomeComponent		} from './home.component';

describe('LoginComponent', () => {
	let component:	HomeComponent;
	let fixture:	ComponentFixture<HomeComponent>;

	beforeEach( async(() => TestBed.configureTestingModule({ declarations: [HomeComponent]}).compileComponents()));

	beforeEach(() => {
		fixture		= TestBed.createComponent( HomeComponent );
		component	= fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => expect( component ).toBeTruthy());
});
