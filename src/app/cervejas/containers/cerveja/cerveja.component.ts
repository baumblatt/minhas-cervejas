import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cerveja',
  templateUrl: './cerveja.component.html',
  styleUrls: ['./cerveja.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CervejaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
