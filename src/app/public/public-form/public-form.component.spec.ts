

import { async					} from '@angular/core/testing';
import { ComponentFixture		} from '@angular/core/testing';
import { TestBed				} from '@angular/core/testing';
import { PublicFormComponent	} from './public-form.component';

describe('PublicFormComponent', () => {
	let component:	PublicFormComponent;
	let fixture:	ComponentFixture<PublicFormComponent>;
	beforeEach( async(() => { TestBed.configureTestingModule({ declarations: [PublicFormComponent]}).compileComponents();}));
	beforeEach(() => {
		fixture		= TestBed.createComponent( PublicFormComponent );
		component	= fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => { expect( component ).toBeTruthy()})
});
