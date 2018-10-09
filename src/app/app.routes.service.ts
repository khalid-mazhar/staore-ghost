import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './views/home/home.component';


const routes: Route[] = [

  { path: '', component: HomeComponent },

];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
