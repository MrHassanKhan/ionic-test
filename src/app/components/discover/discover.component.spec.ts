/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverComponent } from './discover.component';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

describe('DiscoverComponent', () => {
  let component: DiscoverComponent;
  let fixture: ComponentFixture<DiscoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [DiscoverComponent, IonicModule.forRoot()],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: { get: () => 'some_value' } } } // Mock ActivatedRoute
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title with "Discover"', () => {
    const titleElement: HTMLElement = fixture.nativeElement.querySelector('h3');
    expect(titleElement).toBeTruthy();
    expect(titleElement.textContent).toContain('Discover');
  });

  it('should have three steps with correct content', () => {
    const steps = fixture.nativeElement.querySelectorAll('.steps-level ion-col');
    expect(steps.length).toBe(3);

    // Test Step 1
    expect(steps[0].textContent).toContain('Step 1');
    expect(steps[0].textContent).toContain('Subscribe');

    // Test Step 2
    expect(steps[1].textContent).toContain('Step 2');
    expect(steps[1].textContent).toContain('Personalise Your Box');

    // Test Step 3
    expect(steps[2].textContent).toContain('Step 3');
    expect(steps[2].textContent).toContain('Receive Your Surprise Box');
  });

  it('should have a "Subscribe Now" button', () => {
    const button: HTMLElement = fixture.nativeElement.querySelector('.primary');
    expect(button).toBeTruthy();
    expect(button.textContent).toContain('Subscribe Now');
  });

  // Add more test cases as needed for other elements and functionality
});

