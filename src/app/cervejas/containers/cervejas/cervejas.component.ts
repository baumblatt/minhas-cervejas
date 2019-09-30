import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cervejas',
  templateUrl: './cervejas.component.html',
  styleUrls: ['./cervejas.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CervejasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
