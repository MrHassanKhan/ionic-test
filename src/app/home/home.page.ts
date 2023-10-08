import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { DiscoverComponent } from '../components/discover/discover.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, DiscoverComponent, FooterComponent],
})
export class HomePage {
  constructor() {}
}
