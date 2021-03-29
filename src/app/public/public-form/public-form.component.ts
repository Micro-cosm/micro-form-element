

import { environment	} from '../../../environments/environment';
import { Component		} from '@angular/core';
import { DomSanitizer	} from '@angular/platform-browser';
import { Input			} from '@angular/core';
import { OnInit			} from '@angular/core';
import { Observable		} from 'rxjs';
import { Row			} from '../../_services/cms.service';

@Component({
	selector: 'app-public-form',
	templateUrl: './public-form.component.html',
	styleUrls: ['./public-form.component.sass']
})

export class PublicFormComponent implements OnInit {
	env:		any;
	cleanUrl:	any;
	@Input() dirtyUrl:		string = '';
	@Input() pageName:		string= '';
	@Input() beforeRows$:	Observable<Row[]> = new Observable<Row[]>();
	@Input() afterRows$:	Observable<Row[]> = new Observable<Row[]>();
	
	constructor( private sanitizer: DomSanitizer ) { this.env = environment; }

	ngOnInit() {
		this.cleanUrl = this.sanitizer.bypassSecurityTrustResourceUrl( this.dirtyUrl );
	}
}
