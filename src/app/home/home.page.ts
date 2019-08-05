import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  topFive = [
    { name: 'GrahamCampbell' },
    { name: 'fabpot' },
    { name: 'weierophinney' },
    { name: 'rkh' },
    { name: 'josh' },
  ];
  constructor() { }

}
