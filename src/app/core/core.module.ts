import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';

import {CoreRoutingModule} from './core-routing.module';
import { LayoutComponent } from './containers/layout/layout.component';
import { HomeComponent } from './containers/home/home.component';
import { LoginComponent } from './containers/login/login.component';
import { SignupComponent } from './containers/signup/signup.component';


@NgModule({
    declarations: [LayoutComponent, HomeComponent, LoginComponent, SignupComponent],
    imports: [
        SharedModule,
        CoreRoutingModule
    ]
})
export class CoreModule {
}
