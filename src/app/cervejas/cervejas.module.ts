import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';

import {CervejasRoutingModule} from './cervejas-routing.module';


@NgModule({
    declarations: [],
    imports: [
        SharedModule,
        CervejasRoutingModule
    ]
})
export class CervejasModule {
}
