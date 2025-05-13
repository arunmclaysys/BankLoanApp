import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CustomerListComponent } from './pages/customer-list/customer-list.component';
import { BankerListComponent } from './pages/banker-list/banker-list.component';
import { LoanApplicationListComponent } from './pages/loan-application-list/loan-application-list.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '', 
        redirectTo: 'login', 
        pathMatch: 'full'
    },
    {
        path: 'login', 
        component: LoginComponent
    },
    {
        path: 'customers', 
        component: CustomerListComponent
    },
    {
        path: 'bankers', 
        component: BankerListComponent
    },
    {
        path: 'applications', 
        component: LoanApplicationListComponent
    },
    {
        path: 'home',
        component: HomeComponent
    }
];
