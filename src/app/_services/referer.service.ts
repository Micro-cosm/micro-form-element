

import { environment	} from '../../environments/environment';
import { Injectable		} from '@angular/core';

@Injectable({ providedIn: 'root' })

export class RefererService {
	env: any;
	private _wasReferred	= false;

	constructor() { this.env = environment; }

	init( host: string ): boolean {
		if ( host === undefined ) {
			this._wasReferred	= false;
			return this._wasReferred;
		} else {
			this._wasReferred	= true;
			return this._wasReferred;
		}
	}
}
