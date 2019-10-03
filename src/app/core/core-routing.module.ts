import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './containers/home/home.component';
import {LayoutComponent} from './containers/layout/layout.component';
import {LoginComponent} from './containers/login/login.component';
import {SignupComponent} from './containers/signup/signup.component';


const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'layout'},
    {
        path: 'layout', component: LayoutComponent, children: [
            {path: '', pathMatch: 'full', redirectTo: 'home'},
            {path: 'home', component: HomeComponent},
            {path: 'login', component: LoginComponent},
            {path: 'signup', component: SignupComponent},
            {path: 'cervejas', loadChildren: () => import('../cervejas/cervejas.module').then(m => m.CervejasModule)},
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
