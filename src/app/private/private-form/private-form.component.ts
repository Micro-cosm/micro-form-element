

import { environment	} from '../../../environments/environment';
import { Component		} from '@angular/core';
import { DomSanitizer	} from '@angular/platform-browser';
import { Input			} from '@angular/core';
import { OnInit			} from '@angular/core';
import { Observable		} from 'rxjs';
import { Row			} from '../../_services/cms.service';

@Component({
	selector: 'app-private-form',
	templateUrl: './private-form.component.html',
	styleUrls: ['./private-form.component.sass']
})

export class PrivateFormComponent implements OnInit {
	env:		any;
	cleanUrl:	any;
	@Input() dirtyUrl		!:	string;
	@Input() pageName		!:	string;
	@Input() beforeRows$	!:	Observable<Row[]>;
	@Input() afterRows$		!:	Observable<Row[]>;

	constructor( private sanitizer: DomSanitizer ) { this.env = environment; }

	ngOnInit() { this.cleanUrl = this.sanitizer.bypassSecurityTrustResourceUrl( this.dirtyUrl );}
}
