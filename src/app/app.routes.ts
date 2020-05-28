import { Routes, RouterModule } from '@angular/router';
import { PipesComponent } from './components/pipes/pipes.component';
import { NgSwitchComponent } from './components/directivas/ng-switch/ng-switch.component';
import { NgClassComponent } from './components/directivas/ng-class/ng-class.component';
import { PadreComponent } from './components/comunicacionComponentes/padre/padre.component';
import { Padre2Component } from './components/comunicacionComponentes/repaso/padre2/padre2.component';

const routes: Routes = [
    {
        path: '',
        component: PipesComponent
    },
    {
        path: 'pipe',
        component: PipesComponent
    },
    {
        path: 'ng-switch',
        component: NgSwitchComponent
    },
    {
        path: 'ng-class',
        component: NgClassComponent
    },
    {
        path: 'padre',
        component: PadreComponent
    },
    {
        path: 'padre-2',
        component: Padre2Component
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: ''
    }
];

export const APP_ROUTES = RouterModule.forRoot(routes);