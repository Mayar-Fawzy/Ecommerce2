import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config.server'; // غيرنا من config إلى 

const bootstrap = () => bootstrapApplication(AppComponent, appConfig);

export default bootstrap;
