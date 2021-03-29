

import { environment	} from '../../environments/environment';
import { ActivatedRoute	} from '@angular/router';
import { Component		} from '@angular/core';
import { OnInit			} from '@angular/core';
import { Router			} from '@angular/router';
import { Observable		} from 'rxjs';
import { CmsService		} from '../_services/cms.service';
import { Row			} from '../_services/cms.service';

@Component({
	selector: 'app-private',
	templateUrl: './private.component.html',
	styleUrls: ['./private.component.sass']
})

export class PrivateComponent implements OnInit {
	env:		any;
	dirtyUrl	!:	any;
	formId		!:	string | '';
	formAlias	!:	string | 'form';
	beforeRows$	!:	Observable<Row[]>;
	afterRows$	!:	Observable<Row[]>;
	referrer	!:	string[];
	
	constructor(
		private route:		ActivatedRoute,
		private cmsService:	CmsService,
		private router:		Router,
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
		
		console.log( '???????????????????????????????', this.formId );
		
		if ( this.formAlias === undefined ) this.formAlias = 'form';
		
		try {
			this.beforeRows$	= this.cmsService.getContent(this.formAlias + ':before' );
			this.afterRows$		= this.cmsService.getContent(this.formAlias + ':after' );
		} catch (e) { console.log(e);}
	}
}
