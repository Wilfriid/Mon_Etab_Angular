import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // Importez vos routes ici

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)  // Fournissez vos routes ici
  ]
}).catch(err => console.error(err));

