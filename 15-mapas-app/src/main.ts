import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import Mapboxgl from 'mapbox-gl';

Mapboxgl.accessToken = 'pk.eyJ1IjoicmljaGFyZG1hem85NyIsImEiOiJjbHAxbzR3dWwwa2FvMmtvNGFxdGRpa2U3In0.vXuTmD0rrAuyKSsXrPvUxg';


if( !navigator.geolocation ){
  alert('Navegador no soporta el Geolocation');
  throw new Error('Navegador no soporta el Geolocation');
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
