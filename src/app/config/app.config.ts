import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          prefix: 'p',
          darkModeSelector: false || 'none', // System-based dark mode
          cssLayer: false, // Disable CSS layers (default in v19)
          ripple: true, // Enable ripple effect animation for the supported components such as buttons
          inputVariant: 'filled', // filled Input fields
          zIndex: {
            modal: 1100,    // dialog, sidebar
            overlay: 1000,  // dropdown, overlay panel
            menu: 1000,     // overlay menus
            tooltip: 1100   // tooltip
          }
        },
      }
    }),
    provideHttpClient(withFetch()), // Enable fetch API
  ],
};
