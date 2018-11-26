import { UserMetricsComponent } from "./user-metrics/user-metrics.component";
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from "./app.component";

export const router: Routes = [
    { path: '', component: AppComponent },
    { path: 'metrics', component: UserMetricsComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);