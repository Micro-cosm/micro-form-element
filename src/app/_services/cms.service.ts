

import {	environment	}	from '../../environments/environment';
import {	Injectable	}	from '@angular/core';
import {	Apollo		}	from 'apollo-angular';
import {	Observable	}	from 'rxjs';
import {	map			}	from 'rxjs/operators';
import {	filter		}	from 'rxjs/operators';
import		gql 			from 'graphql-tag';

export type Query	= { rows: Row[]; };
export type Row		= {
	page:	string;
	isTest:	string;
	isProd:	string;
	value:	string;
};

// @Injectable({ providedIn: 'root' })
@Injectable()

export class CmsService {
	env: any;
	rows$: Observable<Row[]> = new Observable<Row[]>();

	query = gql`{ rows { page isTest isProd value }}`;

	constructor(public apollo: Apollo) {
		this.env = environment;
		this.loadContent();
	}

	private loadContent() {
		this.rows$ = this.apollo.watchQuery<Query>({query: this.query}).valueChanges.pipe(map(result => {
			return result.data.rows;
		}));
	}

	getContent(component?: String | undefined) {
		return this.rows$.pipe(map(rows => rows.filter(row => {
			return row.page === component && (
				(this.env.production && row.isProd === 'TRUE') || (!this.env.production && row.isTest === 'TRUE')
			);
		})), filter(rows => rows && rows.length > 0));
	}
}


