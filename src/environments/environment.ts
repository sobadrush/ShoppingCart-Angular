// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  productsList : [
    { 'prodName' : 'Gogoro', 'prodPrice' : '78500', 'quantity' : '22' },
    { 'prodName' : 'SWITCH電力加強版', 'prodPrice' : '11500', 'quantity' : '7' },
    { 'prodName' : 'IPhone11', 'prodPrice' : '36500', 'quantity' : '13' },
  ]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
