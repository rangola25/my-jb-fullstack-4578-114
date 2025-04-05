import { Routes } from '@angular/router';
import { NotFoundComponent } from './components/layout/not-found/not-found.component';
import { NewComponent } from './components/furnitures/new/new.component';
import { ListComponent } from './components/furnitures/list/list.component';

export const routes: Routes = [
    { path: '', component: ListComponent },
    { path: 'new', component: NewComponent },
    { path: '**', component: NotFoundComponent }
];
