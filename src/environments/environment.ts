// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {AuthConfig} from '@auth0/auth0-angular';

const authConfig: AuthConfig = {
  domain: 'dev-cxghj3kk.us.auth0.com',
  clientId: 'nBfhunsahJZAPJGCIXZq9tQJelYcXK8L'
};

export const environment = {
  production: false,
  ga: 'G-Y4KR4EG3R2',
  authConfig,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
