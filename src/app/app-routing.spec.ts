import { Location } from '@angular/common';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('Routing', () => {
  let fixture: ComponentFixture<AppComponent>;
  let location: Location;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    router.initialNavigation();
  });

  // Redirect when is empty path
  it('navigate to "" redirects you to /home'),
    fakeAsync(() => {
      router.navigate(['']);
      tick();
      expect(location.path()).toBe('/home');
    });

  // Home
  it('navigate to "home" redirects you to /home'),
    fakeAsync(() => {
      router.navigate(['/home']);
      tick();
      expect(location.path()).toBe('/home');
    });

  // Counter
  it('navigate to "counter" redirects you to /home/counter'),
    fakeAsync(() => {
      router.navigate(['/home/counter']);
      tick();
      expect(location.path()).toBe('/home/counter');
    });
});
