// Import core functionalities
import { enableProdMode, APP_INITIALIZER } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';

// Import your application's root component and routes
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

// Enable production mode for production builds
enableProdMode();

// Bootstrap the application
bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => console.log('Application is initialized'),
      multi: true,
    },
    provideRouter(routes, withEnabledBlockingInitialNavigation())
  ],
}).catch(err => console.error(err));
