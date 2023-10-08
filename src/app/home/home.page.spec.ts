import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePage } from './home.page';
import { IonicModule } from '@ionic/angular';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title with "Discover the magic of our surprise box"', () => {
    const titleElement: HTMLElement = fixture.nativeElement.querySelector('h1');
    expect(titleElement).toBeTruthy();
    expect(titleElement.textContent).toContain('Discover the magic of our surprise box');
  });

  it('should have a subtitle with specific content', () => {
    const subtitleElement: HTMLElement = fixture.nativeElement.querySelector('h2');
    expect(subtitleElement).toBeTruthy();
    expect(subtitleElement.textContent).toContain('Unleash your child\'s curiosity with our educational subscription box filled with fun and learning.');
  });

  it('should have a "Subscribe Now" button', () => {
    const button: HTMLElement = fixture.nativeElement.querySelector('.primary');
    expect(button).toBeTruthy();
    expect(button.textContent).toContain('Subscribe Now');
  });

  it('should have an app-discover component', () => {
    const discoverComponent: HTMLElement = fixture.nativeElement.querySelector('app-discover');
    expect(discoverComponent).toBeTruthy();
  });

  it('should have an app-footer component', () => {
    const footerComponent: HTMLElement = fixture.nativeElement.querySelector('app-footer');
    expect(footerComponent).toBeTruthy();
  });
});

