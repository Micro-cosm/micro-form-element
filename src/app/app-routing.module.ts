

import { NgModule 			} from '@angular/core';
import { RouterModule		} from '@angular/router';
import { Routes				} from '@angular/router';
import { AuthGuard			} from './_guards/auth.guard';
import { HomeComponent		} from './home/home.component';
import { LoggedOutComponent	} from './logged-out/logged-out.component';
import { LoginComponent		} from './login/login.component';
import { PrivateComponent	} from './private/private.component';
import { PublicComponent	} from './public/public.component';

// import { LoggedInGuard	} from 'ngx-auth-firebaseui';	// UNCOMMENT THIS WHEN USING AND PROVIDE TO 'canActivate' WHEN USING ngx-auth-firebaseui local behavior

export const routes: Routes = [
	{ path: '',			redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home',				component: HomeComponent,		canActivate: [AuthGuard]},
	{ path: 'login',			component: LoginComponent,								},
	{ path: 'logged-out',		component: LoggedOutComponent							},
	{ path: 'public/:form',		component: PublicComponent								},
	{ path: 'private/:form',	component: PrivateComponent,	canActivate: [AuthGuard]},
	{ path: '**', 		redirectTo: '/home' }
];

@NgModule({
	imports: [RouterModule.forRoot( routes, { enableTracing: false, useHash: true })],							// initialNavigation: 'enabled'
	exports: [RouterModule]
})

export class AppRoutingModule {}

