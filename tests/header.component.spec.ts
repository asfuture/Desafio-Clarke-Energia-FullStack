import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from '../src/app/shared/viewmodels/header.component';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize menuActive to false', () => {
    expect(component.menuActive).toBeFalsy();
  });

  it('should toggle menuActive value when toggleMenu is called', () => {
    // Initial state should be false
    expect(component.menuActive).toBeFalsy();

    // Call toggleMenu method
    component.toggleMenu();
    expect(component.menuActive).toBe(true);

    // Call toggleMenu method again
    component.toggleMenu();
    expect(component.menuActive).toBeFalsy();
  });

  it('should toggle menuActive value when menu button is clicked', () => {
    // Assume there's a button in your template with id "menuButton"
    const button = fixture.debugElement.query(By.css('.hamburger'));
    
    if (button) {
      button.nativeElement.click();
      fixture.detectChanges();
      expect(component.menuActive).toBe(true);

      button.nativeElement.click();
      fixture.detectChanges();
      expect(component.menuActive).toBeFalsy();
    } else {
      fail('Menu button not found in the template');
    }
  });
});
