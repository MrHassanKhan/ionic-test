/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { IonicModule } from '@ionic/angular';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
      imports: [IonicModule.forRoot()]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should have the correct number of links', () => {
    const links = fixture.nativeElement.querySelectorAll('ion-item');
    expect(links.length).toBe(5); // Adjust the number based on your component template
  });

  it('should have the subscribe button', () => {
    const button = fixture.nativeElement.querySelector('.subscribe');
    expect(button).toBeTruthy();
  });

  it('should have the privacy policy link', () => {
    const privacyPolicyLink = fixture.nativeElement.querySelector('ion-item[label="Privacy Policy"]');
    expect(privacyPolicyLink).toBeTruthy();
  });

  // Add more test cases as needed for other elements and functionality

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
