import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { provideRouter } from '@angular/router';;''
import { routes } from './app/app.routes';
import { LayoutComponent } from './app/home/layout';

bootstrapApplication(LayoutComponent, appConfig)
  .catch((err) => console.error(err));
  