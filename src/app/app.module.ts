
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// DEFAULT
import { environment				} from '../environments/environment';												// EXTERNAL MODULES
import { BrowserAnimationsModule	} from '@angular/platform-browser/animations';
import { BrowserModule				} from '@angular/platform-browser';
import { CdkTableModule				} from '@angular/cdk/table';
import { CdkTreeModule				} from '@angular/cdk/tree';
import { FlexLayoutModule			} from '@angular/flex-layout';
import { NgModule					} from '@angular/core';
import { Title						} from '@angular/platform-browser';
import { AppComponent				} from './app.component';
import { AppRoutingModule			} from './app-routing.module';
import { HomeComponent				} from './home/home.component';
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////// AVAILABLE(by function)
import { AngularFireModule			} from '@angular/fire';																// AUTH
import { HttpClientModule			} from '@angular/common/http';														// AUTH
import { NgxAuthFirebaseUIModule	} from 'ngx-auth-firebaseui';														// AUTH
import { LoggedOutComponent			} from './logged-out/logged-out.component';											// AUTH
import { LoginComponent				} from './login/login.component';													// AUTH
import { GraphQLModule				} from './sub-modules/graphql.module';												// AUTH
import { CmsService					} from './_services/cms.service';													// DYNAMIC CONTENT
import { NavPipe					} from './_pipes/nav.pipe';															// DYNAMIC CONTENT
import { SafePipe					} from './_pipes/safe.pipe';														// DYNAMIC CONTENT
import { CUSTOM_ELEMENTS_SCHEMA		} from '@angular/core';																// ELEMENT SUPPORT
import { MaterialModule				} from './sub-modules/material.module';												// ELEMENT SUPPORT
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// CUSTOM
import { PrivateComponent			} from './private/private.component';												// COMPONENTS
import { PrivateFormComponent		} from './private/private-form/private-form.component';
import { PublicComponent			} from './public/public.component';
import { PublicFormComponent		} from './public/public-form/public-form.component';

import 'hammerjs';

export function firebaseAppNameFactory() { return `weja-us`; }

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		LoginComponent,
		LoggedOutComponent,
		PrivateComponent,
		PrivateFormComponent,
		PublicComponent,
		PublicFormComponent,
		NavPipe,
		SafePipe
	],
	imports: [
		AppRoutingModule,
		BrowserAnimationsModule,
		BrowserModule,
		CdkTableModule,
		CdkTreeModule,
		FlexLayoutModule,
		GraphQLModule,
		HttpClientModule,
		AngularFireModule.initializeApp( environment.firebase.creds ),
		NgxAuthFirebaseUIModule.forRoot( environment.firebase.creds, firebaseAppNameFactory, environment.firebase.configs ),
		MaterialModule
	],
	providers: [
		{ provide: 'googleTagManagerId',	useValue: environment.google.analytics.trackingCode },
		CmsService,
		Title
	],
	schemas:	[CUSTOM_ELEMENTS_SCHEMA],
	bootstrap:	[AppComponent]
})

export class AppModule {}
