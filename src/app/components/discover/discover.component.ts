import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-discover',
  templateUrl: 'discover.component.html',
  styleUrls: ['discover.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink]
})
export class DiscoverComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
