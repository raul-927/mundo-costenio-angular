import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './../app/components/login/login.component';
import { AppComponent } from './../app/app.component';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);