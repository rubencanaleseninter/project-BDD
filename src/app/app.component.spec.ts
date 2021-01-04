import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from 'protractor';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: any;
  let app: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Bienvenido al proyecto BDD'`, () => {
    expect(app.title).toEqual('Bienvenido al proyecto BDD');
  });

  it('should have a Home button', () => {
    const btn = fixture.debugElement.nativeElement.querySelector('#home');
    expect(btn).toBeTruthy();
  });

  it('should have a Counter button', () => {
    const btn = fixture.debugElement.nativeElement.querySelector('#counter');
    expect(btn).toBeTruthy();
  });
});
