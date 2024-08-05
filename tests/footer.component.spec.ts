import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from '../src/app/shared/viewmodels/footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have footer content', () => {
    const footerElement: HTMLElement = fixture.nativeElement;
    const content = footerElement.textContent?.trim();
    
    expect(content).toBeTruthy();  // Check that some content exists
  });
});
