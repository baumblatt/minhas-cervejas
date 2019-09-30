import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Cerveja} from '../../models/cerveja.model';

@Component({
    selector: 'app-cervejas-list',
    templateUrl: './cervejas-list.component.html',
    styleUrls: ['./cervejas-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CervejasListComponent implements OnInit {

    @Input()
    cervejas: Cerveja[];

    constructor() {
    }

    ngOnInit() {
    }

}
