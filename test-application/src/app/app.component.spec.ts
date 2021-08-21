import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should contain correct value for Title', () => {
    const virtualComponent = TestBed.createComponent(AppComponent);
    var app = virtualComponent.componentInstance;
    expect(app.userName).toBe("Anshul Gupta")
  });

  it('should contain correct business logic', () => {
    const virtualComponent = TestBed.createComponent(AppComponent);
    var app = virtualComponent.componentInstance;
    app.updateUserName();
    expect(app.userName).toBe("Mayank Gupta")
  });

  it('should contain correct rendered result', () => {
    debugger;

    const virtualComponent = TestBed.createComponent(AppComponent);
    
    var app = virtualComponent.componentInstance;
    var appRendered = virtualComponent.nativeElement;
    
    virtualComponent.detectChanges();
    
    expect(app.userName).toBe("Anshul Gupta");
    expect(appRendered.querySelector("h1")).toBeTruthy();

    expect(appRendered.getElementsByClassName("root").length).toBe(1)
    expect(appRendered.getElementsByClassName("root")[0].textContent).toBe("Anshul Gupta")
    
    app.updateUserName();
    expect(app.userName).toBe("Mayank Gupta");

    virtualComponent.detectChanges()
    expect(appRendered.getElementsByClassName("root")[0].textContent).toBe("Mayank Gupta");
  });
});
