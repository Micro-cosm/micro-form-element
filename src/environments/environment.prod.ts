// V4

//  UNIQUE TO EACH MIFE
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	EXPLICITLY-DEFINED ENVIRONMENT
const	TARGET_ALIAS		= process.env.TARGET_ALIAS			|| 'stage';
const	THIS_NICKNAME		= process.env.NICKNAME				|| 'form';
const	THIS_TITLE			= process.env.THIS_TITLE			|| 'WèJá Töö ' + THIS_NICKNAME + '(' + TARGET_ALIAS + ')';
const	TARGET_PROJECT_ID	= process.env.TARGET_PROJECT_ID		|| 'weja-us';
const	TARGET_DOMAIN		= process.env.TARGET_DOMAIN			|| 'weja.us';
const	TARGET_REALM		= process.env.TARGET_REALM			|| 'too.fb.';
const	DEBUG				= process.env.DEBUG					|| 'true';
const	LOGS				= process.env.LOGS					|| 'true';
const	GA4_MEASUREMENT_ID	= process.env.GA4_MEASUREMENT_ID	|| 'GTM-KSPP85J';
const	CMS_SHEET 			= process.env.CMS_SHEET 			|| 'https://docs.google.com/spreadsheets/d/14T-GM6Cx-OpT_s4MCytc1VL8fQax8eOC8IHdne-1Wf4/edit#gid=1055269632';

//  LESS FREQUENT -- MIFE ADDS/UPDATES
	// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////	GLOBAL CONSTANTS
	const LOCAL_PROTOCOL 			= process.env.LOCAL_PROTOCOL			|| 'http://';
	const REMOTE_PROTOCOL			= process.env.REMOTE_PROTOCOL			|| 'https://';
	const THIS_PROTOCOL				= process.env.THIS_PROTOCOL				|| REMOTE_PROTOCOL;
	const STAGE_REMOTE_REALM_BASE	= process.env.STAGE_REMOTE_REALM_BASE	|| REMOTE_PROTOCOL + 'too.fb.' + TARGET_DOMAIN;
	const PROD_REMOTE_REALM_BASE	= process.env.PROD_REMOTE_REALM_BASE	|| REMOTE_PROTOCOL + 'foo.fb.' + TARGET_DOMAIN;
	// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////	LOCALLY REGISTERED SERVICES
	const LOCAL_REALM_BASE 			= process.env.LOCAL_REALM_BASE			|| LOCAL_PROTOCOL	+ 'localhost:';
	const AUTH_LOCAL_SERVICE		= process.env.AUTH_LOCAL_SERVICE		|| LOCAL_REALM_BASE	+ '4410/auth/#/';
	const CHAT_LOCAL_SERVICE		= process.env.CHAT_LOCAL_SERVICE		|| LOCAL_REALM_BASE	+ '4415/chat/#/';
	const CMS_LOCAL_SERVICE			= process.env.CMS_LOCAL_SERVICE			|| LOCAL_REALM_BASE	+ '4411/cms/#/';
	const FORM_LOCAL_SERVICE		= process.env.FORM_LOCAL_SERVICE		|| LOCAL_REALM_BASE	+ '4413/form/#/';
	const PRIVATE_LOCAL_SERVICE		= process.env.PRIVATE_LOCAL_SERVICE		|| LOCAL_REALM_BASE	+ '4401/private/#/';
	const PUBLIC_LOCAL_SERVICE		= process.env.PUBLIC_LOCAL_SERVICE		|| LOCAL_REALM_BASE	+ '4402/public/#/';
	// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////	REMOTELY REGISTERED SERVICES
	const TARGET_REMOTE_REALM		= process.env.TARGET_REMOTE_REALM		|| TARGET_REALM		+ TARGET_DOMAIN;
	const TARGET_REMOTE_REALM_BASE	= process.env.REMOTE_REALM_BASE			|| REMOTE_PROTOCOL	+ TARGET_REMOTE_REALM;
	const AUTH_REMOTE_SERVICE		= process.env.AUTH_REMOTE_SERVICE		|| TARGET_REMOTE_REALM_BASE	+ '/auth/#/';
	const CHAT_REMOTE_SERVICE		= process.env.CHAT_REMOTE_SERVICE		|| TARGET_REMOTE_REALM_BASE	+ '/chat/#/';
	const CMS_REMOTE_SERVICE		= process.env.CMS_REMOTE_SERVICE		|| PROD_REMOTE_REALM_BASE	+ '/cms';
	const FORM_REMOTE_SERVICE		= process.env.FORM_REMOTE_SERVICE		|| TARGET_REMOTE_REALM_BASE	+ '/form/#/';
	const PRIVATE_REMOTE_SERVICE	= process.env.PRIVATE_REMOTE_SERVICE	|| TARGET_REMOTE_REALM_BASE	+ '/private/#/';
	const PUBLIC_REMOTE_SERVICE		= process.env.PUBLIC_REMOTE_SERVICE		|| TARGET_REMOTE_REALM_BASE	+ '/public/#/';
	// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////	MISC ASSETS
	const ASSETS_BUCKET	= process.env.ASSETS_BUCKET	|| 'https://storage.googleapis.com/' + TARGET_DOMAIN;
	const CMS_ALIAS		= process.env.CMS_ALIAS		|| TARGET_ALIAS + '-EN_US';
	// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////	FIREBASE
	const FB_CREDS_API_KEY				= process.env.FB_CREDS_API_KEY				|| 'AIzaSyACF9vblOxUSQbRu6LsRgWuDBIqRjzYYyM';
	const FB_CREDS_AUTH_DOMAIN			= process.env.FB_CREDS_AUTH_DOMAIN			|| TARGET_REMOTE_REALM;
	const FB_CREDS_DATABASE_URL			= process.env.FB_CREDS_DATABASE_URL			|| 'https://' + TARGET_PROJECT_ID + '.firebaseio.com/';
	const FB_CREDS_PROJECT_ID			= process.env.FB_CREDS_PROJECT_ID			|| TARGET_PROJECT_ID;
	const FB_CREDS_MEASUREMENT_ID		= process.env.FB_CREDS_MEASUREMENT_ID		|| GA4_MEASUREMENT_ID;
	const FB_CREDS_STORAGE_BUCKET		= process.env.FB_CREDS_STORAGE_BUCKET		|| TARGET_PROJECT_ID + '.appspot.com';
	const FB_CREDS_APP_ID				= process.env.FB_CREDS_APP_ID				|| '"1:68199260028:web:e619292af013b9a10a8ef9';
	const FB_CREDS_MESSAGING_SENDER_ID	= process.env.FB_CREDS_MESSAGING_SENDER_ID	|| '68199260028';
	
//  MORE FREQUENT --  CUSTOM DEVELOPMENT/INTEGRATION
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	THIS MIFE
const THIS_SERVICE		= process.env.FORM_SERVICE		|| FORM_REMOTE_SERVICE;
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	OTHER MIFEN
const AUTH_SERVICE		= process.env.AUTH_SERVICE		|| AUTH_REMOTE_SERVICE;
const CMS_SERVICE		= process.env.CMS_SERVICE		|| CMS_REMOTE_SERVICE;
const CHAT_SERVICE		= process.env.CHAT_SERVICE		|| CHAT_REMOTE_SERVICE;
const FORM_SERVICE		= process.env.FORM_SERVICE		|| THIS_SERVICE;
const PRIVATE_SERVICE	= process.env.PRIVATE_SERVICE	|| PRIVATE_REMOTE_SERVICE;
const PUBLIC_SERVICE	= process.env.PUBLIC_SERVICE	|| PUBLIC_REMOTE_SERVICE;
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	REGISTERED FORMS
const FORM_CONTACT		= process.env.FORM_CONTACT		|| 'pVYsWezP';
const FORM_REGISTER		= process.env.FORM_REGISTER		|| 'axJT9FLX';
const FORM_FEEDBACK		= process.env.FORM_FEEBACK		|| 'vIKRhjtU';


export const environment = {
	production:	Boolean( TARGET_ALIAS	=== 'prod' ),
	this:		{ nickname: THIS_NICKNAME,	service: THIS_SERVICE, title: THIS_TITLE },
	target:		{ alias:	TARGET_ALIAS,	domain: TARGET_DOMAIN, realm: TARGET_REALM, remote: TARGET_REMOTE_REALM },
	realm:		{ base:		TARGET_REMOTE_REALM_BASE },
	assets:		{ bucket:	ASSETS_BUCKET },
	auth:		{ service:	AUTH_SERVICE,	register: AUTH_SERVICE + 'register' },
	cms:		{ service:	CMS_SERVICE,	sheet: CMS_SHEET, alias: CMS_ALIAS },
	chat:		{ service:	CHAT_SERVICE		},
	form:		{ service:	FORM_SERVICE, base: THIS_PROTOCOL + 'form.typeform.com/to/',
		name: {
			contact:	FORM_CONTACT,
			register:	FORM_REGISTER,
			feedback:	FORM_FEEDBACK
		}
	},
	private:	{ service:	PRIVATE_SERVICE		},
	public:		{ service:	PUBLIC_SERVICE		},
	authGuardRemoteFallbackURL:	AUTH_SERVICE	+ 'login',
	authGuardRemoteLoggedInURL:	PRIVATE_SERVICE	+ 'home',
	firebase: {
		creds: {
			appId:				FB_CREDS_APP_ID,
			apiKey:				FB_CREDS_API_KEY,
			authDomain:			FB_CREDS_AUTH_DOMAIN,
			databaseURL:		FB_CREDS_DATABASE_URL,
			measurementId:		FB_CREDS_MEASUREMENT_ID,
			messagingSenderId:	FB_CREDS_MESSAGING_SENDER_ID,
			projectId:			FB_CREDS_PROJECT_ID,
			storageBucket:		FB_CREDS_STORAGE_BUCKET,
		},
		configs: {
			authGuardFallbackURL:		'/login',
			authGuardLoggedInURL:		'/home',
			enableEmailVerification:	true,
			enableFirestoreSync:		true,
			nameMaxLength:				50,
			nameMinLength:				2,
			passwordMaxLength:			60,
			passwordMinLength:			8,
			toastMessageOnAuthSuccess:	false,
			toastMessageOnAuthError:	true,
			guardProtectedRoutesUntilEmailIsVerified:	true,
		},
	},
	google: { analytics: { trackingCode: FB_CREDS_MEASUREMENT_ID }},
	debug:	Boolean( DEBUG	=== 'true' ),
	logs:	Boolean( LOGS	=== 'true' ),
	timeZone: 'America/Denver'
};

/**
 * How to use angular-server-side-configuration:
 *
 * Use process.env.NAME_OF_YOUR_ENVIRONMENT_VARIABLE
 *
 * export const environment = {
 *   stringValue: process.env.STRING_VALUE,
 *   stringValueWithDefault: process.env.STRING_VALUE || 'defaultValue',
 *   numberValue: Number(process.env.NUMBER_VALUE),
 *   numberValueWithDefault: Number(process.env.NUMBER_VALUE || 10),
 *   booleanValue: Boolean(process.env.BOOLEAN_VALUE),
 *   booleanValueInverted: process.env.BOOLEAN_VALUE_INVERTED !== 'false',
 * };
 */

