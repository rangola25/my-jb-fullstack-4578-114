import { Routes } from '@angular/router';
import { NotFoundComponent } from './components/layout/not-found/not-found.component';
import { NewComponent } from './components/toysrus/new/new.component';
import { ListComponent } from './components/toysrus/list/list.component';
import { HomeComponent } from './components/toysrus/home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component:  HomeComponent },
    { path: 'toys', component: ListComponent },
    { path: 'new', component: NewComponent },
    { path: '**', component: NotFoundComponent }
];
