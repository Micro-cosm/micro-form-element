

import { environment	} from '../../environments/environment';
import { ActivatedRoute	} from '@angular/router';
import { Component		} from '@angular/core';
import { OnInit			} from '@angular/core';
import { Router			} from '@angular/router';
import { Observable		} from 'rxjs';
import { CmsService		} from '../_services/cms.service';
import { RefererService	} from '../_services/referer.service';
import { Row			} from '../_services/cms.service';

@Component({
	selector: 'app-public',
	templateUrl: './public.component.html',
	styleUrls: ['./public.component.sass']
})

export class PublicComponent implements OnInit {
	env:			any;
	dirtyUrl:		any;
	formId:			string = '';
	beforeRows$:	Observable<Row[]> = new Observable<Row[]>();
	afterRows$:		Observable<Row[]> = new Observable<Row[]>();
	referrer:		string[] = [];

	formAlias	= 'form';
	
	constructor(
		private cmsService:	CmsService,
		private router:		Router,
		private route:		ActivatedRoute,
		private	ref:		RefererService
	) {
		this.env = environment;
		this.route.paramMap.subscribe(params => {
			this.formAlias = params.get('form') || 'form';
			this.router.routeReuseStrategy.shouldReuseRoute = () => false;
		});
	}

	ngOnInit() {
		this.formId		= this.env.form.name[this.formAlias];
		this.dirtyUrl	= this.env.form.base + this.formId;
		this.referrer	= document.referrer.split('/' );
		console.log( 'Referer: ', this.ref );
		console.log( 'Form alias: ', this.formAlias );
		console.log( 'Form ID: ', this.formId );

		if ( this.formAlias === null ) this.formAlias = 'form';

		try {
			this.beforeRows$	= this.cmsService.getContent( this.formAlias + ':before' );
			this.afterRows$		= this.cmsService.getContent( this.formAlias + ':after' );
		} catch (e) { console.log(e);}
	}
}
