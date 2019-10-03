import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CervejaComponent} from './containers/cerveja/cerveja.component';
import {CervejasComponent} from './containers/cervejas/cervejas.component';


const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'cervejas'},
    {path: 'cervejas', component: CervejasComponent},
    {path: 'cerveja/:id', component: CervejaComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CervejasRoutingModule { }
