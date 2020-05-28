import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { CheckExistImagePipe } from './components/pipes/check-exist-image.pipe';
import { CambiarContrasenaPipe } from './components/pipes/cambiar-contrasena.pipe';
import { MultiplicacionBasicaPipe } from './components/pipes/multiplicacion-basica.pipe';
import { NgSwitchComponent } from './components/directivas/ng-switch/ng-switch.component';
import { NgClassComponent } from './components/directivas/ng-class/ng-class.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { APP_ROUTES } from './app.routes';
import { RandomColorDirective } from './components/directivas/random-color.directive';
import { ChangeColorDirective } from './components/directivas/change-color.directive';
import { ChangeInputDirective } from './components/directivas/change-input.directive';
import { PadreComponent } from './components/comunicacionComponentes/padre/padre.component';
import { Hijo1Component } from './components/comunicacionComponentes/hijo1/hijo1.component';
import { Padre2Component } from './components/comunicacionComponentes/repaso/padre2/padre2.component';
import { Hijo2Component } from './components/comunicacionComponentes/repaso/hijo2/hijo2.component';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    CheckExistImagePipe,
    CambiarContrasenaPipe,
    MultiplicacionBasicaPipe,
    NgSwitchComponent,
    NgClassComponent,
    NavbarComponent,
    RandomColorDirective,
    ChangeColorDirective,
    ChangeInputDirective,
    PadreComponent,
    Hijo1Component,
    Padre2Component,
    Hijo2Component
  ],
  imports: [
    BrowserModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
