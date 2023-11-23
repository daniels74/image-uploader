import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/Root/app.config';
import { AppComponent } from './app/Root/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err),
);
