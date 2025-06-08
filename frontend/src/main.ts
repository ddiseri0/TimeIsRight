import {bootstrapApplication, provideClientHydration, withEventReplay} from '@angular/platform-browser';
import {importProvidersFrom, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {provideAnimations} from '@angular/platform-browser/animations';


// qui importa i moduli Material che ti servono subito:
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
// ... altri moduli Material
import {App} from './app/app';
import {routes} from './app/app.routes';

bootstrapApplication(App, {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideAnimations(),
    importProvidersFrom(
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatCardModule,
    )
  ]
})
  .catch(err => console.error(err));
