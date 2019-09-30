import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';

import {CervejasRoutingModule} from './cervejas-routing.module';
import { CervejasComponent } from './containers/cervejas/cervejas.component';
import { CervejaComponent } from './containers/cerveja/cerveja.component';
import { CervejasListComponent } from './components/cervejas-list/cervejas-list.component';
import { CervejasFormComponent } from './components/cervejas-form/cervejas-form.component';


@NgModule({
    declarations: [CervejasComponent, CervejaComponent, CervejasListComponent, CervejasFormComponent],
    imports: [
        SharedModule,
        CervejasRoutingModule
    ]
})
export class CervejasModule {
}
