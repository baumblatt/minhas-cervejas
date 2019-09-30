import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Cerveja} from '../../models/cerveja.model';

@Component({
    selector: 'app-cervejas-form',
    templateUrl: './cervejas-form.component.html',
    styleUrls: ['./cervejas-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CervejasFormComponent implements OnInit {

    cervejaForm = this.fb.group({
        id: ['', Validators.required],
        nome: ['', Validators.required],
    });

    constructor(private fb: FormBuilder) {
    }

    @Input()
    set cerveja(value: Cerveja) {
        if (!!value) {
            this.cervejaForm.patchValue(value);
        }
    }

    ngOnInit() {
    }

}
