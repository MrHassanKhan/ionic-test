/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [FooterComponent, IonicModule.forRoot()],
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
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should have the correct number of links', () => {
    const ionList = fixture.nativeElement.querySelector('.mainlinks');
    expect(ionList).toBeTruthy();
    const links = ionList.querySelectorAll('ion-item');
    expect(links.length).toBe(5); // Adjust the number based on your component template
  });

  it('should have the subscribe button', () => {
    const button = fixture.nativeElement.querySelector('.subscribe');
    expect(button).toBeTruthy();
  });

  // it('should have the privacy policy link', () => {
  //   const privacyPolicyLink = fixture.nativeElement.querySelector('ion-item[label="Privacy Policy"]');
  //   expect(privacyPolicyLink).toBeTruthy();
  // });

  // Add more test cases as needed for other elements and functionality

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
