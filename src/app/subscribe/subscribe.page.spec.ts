import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SubscribePage } from './subscribe.page';
import { IonicModule } from '@ionic/angular';

describe('SubscribePage', () => {
  let component: SubscribePage;
  let fixture: ComponentFixture<SubscribePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SubscribePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();
    fixture = TestBed.createComponent(SubscribePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title with "Subscribe"', () => {
    const titleElement: HTMLElement = fixture.nativeElement.querySelector('.title');
    expect(titleElement).toBeTruthy();
    expect(titleElement.textContent).toContain('Subscribe');
  });

  it('should have input fields for contact information', () => {
    const nameInput: HTMLElement = fixture.nativeElement.querySelector('ion-input[aria-label="name"]');
    const emailInput: HTMLElement = fixture.nativeElement.querySelector('ion-input[aria-label="email"]');
    expect(nameInput).toBeTruthy();
    expect(emailInput).toBeTruthy();
  });

  it('should have input fields for child information', () => {
    const childNameInput: HTMLElement = fixture.nativeElement.querySelector('ion-input[aria-label="name"]');
    const gradeInput: HTMLElement = fixture.nativeElement.querySelector('ion-select[placeholder="e.g Grade 2"]');
    expect(childNameInput).toBeTruthy();
    expect(gradeInput).toBeTruthy();
  });

  it('should have radio buttons for gender selection', () => {
    const boyRadio: HTMLElement = fixture.nativeElement.querySelector('ion-radio[value="boy"]');
    const girlRadio: HTMLElement = fixture.nativeElement.querySelector('ion-radio[value="girl"]');
    expect(boyRadio).toBeTruthy();
    expect(girlRadio).toBeTruthy();
  });

  it('should have chips for topic selection', () => {
    const topicChips: NodeListOf<Element> = fixture.nativeElement.querySelectorAll('ion-chip');
    expect(topicChips.length).toBe(5); // Assuming there are 5 topics
  });

  it('should have a "Continue to payment" button', () => {
    const button: HTMLElement = fixture.nativeElement.querySelector('.primary');
    expect(button).toBeTruthy();
    expect(button.textContent).toContain('Continue to payment');
  });

  it('should have order summary elements', () => {
    const item: HTMLElement = fixture.nativeElement.querySelector('.item-name');
    const subtotal: HTMLElement = fixture.nativeElement.querySelector('.label2');
    expect(item).toBeTruthy();
    expect(subtotal).toBeTruthy();
  });
});
